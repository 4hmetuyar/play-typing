import React, { useState, useEffect, useRef } from 'react';
import { getRandomCodeExample } from '../data/codeExamples';

const TypingGame = ({ onEndGame }) => {
  const [currentCode, setCurrentCode] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameActive, setIsGameActive] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [gameStats, setGameStats] = useState({
    correct: 0,
    incorrect: 0,
    total: 0
  });
  const [lastCorrectWords, setLastCorrectWords] = useState(0);
  const [highlightedCode, setHighlightedCode] = useState('');

  const intervalRef = useRef(null);
  const textareaRef = useRef(null);

  // Kodu karakter karakter highlight et
  const highlightCode = (targetCode, userInput) => {
    if (!targetCode || !userInput) {
      return targetCode;
    }

    let highlighted = '';
    const targetLength = targetCode.length;
    const inputLength = userInput.length;

    for (let i = 0; i < Math.max(targetLength, inputLength); i++) {
      const targetChar = targetCode[i] || '';
      const inputChar = userInput[i] || '';

      if (i < inputLength) {
        if (targetChar === inputChar) {
          // Doğru karakter - yeşil
          highlighted += `<span class="char-correct">${targetChar === ' ' ? '&nbsp;' : targetChar}</span>`;
        } else {
          // Yanlış karakter - kırmızı
          highlighted += `<span class="char-incorrect">${targetChar === ' ' ? '&nbsp;' : targetChar}</span>`;
        }
      } else {
        // Henüz yazılmamış karakter - normal
        highlighted += `<span class="char-pending">${targetChar === ' ' ? '&nbsp;' : targetChar}</span>`;
      }
    }

    return highlighted;
  };

  // Kelime bazlı doğru sayısını hesapla
  const countCorrectWords = (targetCode, userInput) => {
    if (!targetCode || !userInput) return 0;

    const targetWords = targetCode.split(/\s+/);
    const inputWords = userInput.split(/\s+/);
    
    let correctWords = 0;
    for (let i = 0; i < Math.min(targetWords.length, inputWords.length); i++) {
      if (targetWords[i] === inputWords[i]) {
        correctWords++;
      } else {
        break; // İlk hatalı kelimeden sonra dur
      }
    }
    
    return correctWords;
  };

  // Oyunu başlat
  const startGame = () => {
    const newCode = getRandomCodeExample();
    setCurrentCode(newCode);
    setUserInput('');
    setTimeLeft(60);
    setIsGameActive(true);
    setFeedback('');
    setScore(0);
    setGameStats({ correct: 0, incorrect: 0, total: 0 });
    setLastCorrectWords(0);
    
    // Timer başlat
    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Süre bitti, yeni kod yükle
          loadNewCode();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    // Input'a odaklan
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 100);
  };

  // Yeni kod yükle
  const loadNewCode = () => {
    const newCode = getRandomCodeExample();
    setCurrentCode(newCode);
    setUserInput('');
    setFeedback('');
    setHighlightedCode('');
    setLastCorrectWords(0);
  };

  // Oyunu durdur
  const stopGame = () => {
    setIsGameActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Oyunu bitir
  const endGame = () => {
    stopGame();
    onEndGame();
  };

  // Input değişikliğini kontrol et
  const handleInputChange = (e) => {
    if (!isGameActive) return;

    const input = e.target.value;
    setUserInput(input);

    if (!currentCode) return;

    const targetCode = currentCode.code;
    
    // Kodu highlight et
    const highlighted = highlightCode(targetCode, input);
    setHighlightedCode(highlighted);

    // Doğru yazılan kelime sayısını hesapla
    const correctWords = countCorrectWords(targetCode, input);

    // Yeni doğru kelimeler varsa sayıları güncelle
    if (correctWords > lastCorrectWords) {
      const newCorrectWords = correctWords - lastCorrectWords;
      setScore(prev => prev + (newCorrectWords * 50)); // Her kelime için 50 puan
      setGameStats(prev => ({
        ...prev,
        correct: prev.correct + newCorrectWords,
        total: prev.total + newCorrectWords
      }));
      setLastCorrectWords(correctWords);
    }

    // Hata varsa hata sayısını artır (kelime bazlı)
    const targetWords = targetCode.split(/\s+/);
    const inputWords = input.split(/\s+/);
    if (inputWords.length > 0 && correctWords < inputWords.length) {
      const errorWords = inputWords.length - correctWords;
      if (errorWords > (inputWords.length - lastCorrectWords)) {
        setGameStats(prev => ({
          ...prev,
          incorrect: prev.incorrect + 1,
          total: prev.total + 1
        }));
      }
    }

    const isCorrect = input === targetCode;
    const isIncomplete = input.length < targetCode.length;
    const hasError = input.length > 0 && !targetCode.startsWith(input);

    // Geri bildirim ver
    if (isCorrect) {
      setFeedback('correct');
      setScore(prev => prev + 200); // Tam kod için bonus puan
      
      // 2 saniye sonra yeni kod yükle
      setTimeout(() => {
        loadNewCode();
      }, 2000);
    } else if (hasError) {
      setFeedback('incorrect');
    } else if (isIncomplete) {
      setFeedback('neutral');
    }
  };

  // Klavye kısayolları
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      stopGame();
    } else if (e.key === 'F1') {
      e.preventDefault();
      startGame();
    }
  };

  // Component mount olduğunda oyunu başlat
  useEffect(() => {
    startGame();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Input'a odaklan
  useEffect(() => {
    if (isGameActive && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isGameActive, currentCode]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getFeedbackMessage = () => {
    switch (feedback) {
      case 'correct':
        return '✅ Mükemmel! Doğru yazdınız!';
      case 'incorrect':
        return '❌ Hata! Tekrar deneyin.';
      case 'neutral':
        return '⌨️ Yazmaya devam edin...';
      default:
        return '';
    }
  };

  return (
    <div className="typing-game">
      <div className="game-header">
        <h1 className="game-title">Kod Yazma Pratiği</h1>
        <div className="timer">
          {formatTime(timeLeft)}
        </div>
      </div>

      {currentCode && (
        <>
          <div className="code-info">
            <h3>{currentCode.language} - {currentCode.title}</h3>
            <p>Skor: {score} | Doğru: {gameStats.correct} | Hata: {gameStats.incorrect}</p>
          </div>

          <div 
            className="code-display"
            dangerouslySetInnerHTML={{
              __html: highlightedCode || currentCode.code
            }}
          />

          {feedback && (
            <div className={`feedback ${feedback}`}>
              {getFeedbackMessage()}
            </div>
          )}

          <div className="input-area">
            <label htmlFor="code-input" className="input-label">
              Kodu buraya yazın:
            </label>
            <textarea
              ref={textareaRef}
              id="code-input"
              className="code-input"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Kodu buraya yazmaya başlayın..."
              disabled={!isGameActive}
            />
          </div>
        </>
      )}

      <div className="game-controls">
        {!isGameActive ? (
          <button className="control-button primary" onClick={startGame}>
            Oyunu Başlat
          </button>
        ) : (
          <button className="control-button secondary" onClick={stopGame}>
            Duraklat
          </button>
        )}
        
        <button className="control-button danger" onClick={endGame}>
          Oyunu Bitir
        </button>
      </div>

      <div className="game-instructions">
        <p><strong>Kısayollar:</strong></p>
        <p>ESC - Oyunu duraklat | F1 - Oyunu başlat</p>
        <p>Her dakika yeni bir kod örneği yüklenecek!</p>
      </div>
    </div>
  );
};

export default TypingGame;
