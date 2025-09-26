import React, { useState, useEffect, useRef } from 'react';
import { getRandomCodeExample, codeExamples } from '../data/codeExamples';
import { fetchTrendingCodeExamples, fetchCodeExamplesByLanguage, fetchRandomCodeExample } from '../services/githubService';
import { 
  Code, 
  Clock, 
  Cpu, 
  Award, 
  Check, 
  X, 
  Play, 
  Pause, 
  Square,
  RotateCcw
} from 'react-feather';

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
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState(60);
  const [codeDisplayScroll, setCodeDisplayScroll] = useState(0);
  const [aiCodeExamples, setAiCodeExamples] = useState([]);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [useAICodes, setUseAICodes] = useState(false);
  const [cacheStatus, setCacheStatus] = useState('');

  const intervalRef = useRef(null);
  const textareaRef = useRef(null);
  const codeDisplayRef = useRef(null);

  // Syntax highlighting için kod renklendirme
  const syntaxHighlight = (code, language) => {
    if (!code) return code;
    
    let highlighted = code;
    
    // JavaScript/TypeScript highlighting
    if (language.toLowerCase().includes('javascript') || language.toLowerCase().includes('typescript') || language.toLowerCase().includes('react')) {
      // React-specific keywords
      if (language.toLowerCase().includes('react')) {
        highlighted = highlighted.replace(/\b(useState|useEffect|useContext|useReducer|useMemo|useCallback|useRef|useImperativeHandle|useLayoutEffect|useDebugValue|React|Component|PureComponent|Fragment|Suspense|lazy|memo|forwardRef|createContext|createElement|cloneElement|isValidElement|Children|PropTypes|defaultProps|displayName|key|ref|props|state|setState|componentDidMount|componentDidUpdate|componentWillUnmount|render|constructor|super|bind|map|filter|reduce|find|forEach|some|every|includes|indexOf|slice|splice|push|pop|shift|unshift|join|split|replace|match|test|exec|toString|valueOf|hasOwnProperty|isPrototypeOf|propertyIsEnumerable|toLocaleString)\b/g, '<span class="syntax-keyword">$1</span>');
      }
      
      // General JavaScript keywords
      highlighted = highlighted.replace(/\b(const|let|var|function|if|else|for|while|return|import|export|from|class|extends|async|await|try|catch|finally|throw|new|this|super|static|public|private|protected|interface|type|enum|namespace|module|declare|as|is|in|of|typeof|instanceof|void|null|undefined|true|false|break|continue|switch|case|default|do|with|debugger)\b/g, '<span class="syntax-keyword">$1</span>');
      
      // JSX elements (React only)
      if (language.toLowerCase().includes('react')) {
        highlighted = highlighted.replace(/(<[A-Z][a-zA-Z0-9]*)/g, '<span class="syntax-class">$1</span>');
        highlighted = highlighted.replace(/(<\/[A-Z][a-zA-Z0-9]*>)/g, '<span class="syntax-class">$1</span>');
        highlighted = highlighted.replace(/(<[a-z][a-zA-Z0-9]*)/g, '<span class="syntax-selector">$1</span>');
        highlighted = highlighted.replace(/(<\/[a-z][a-zA-Z0-9]*>)/g, '<span class="syntax-selector">$1</span>');
      }
      
      // Strings
      highlighted = highlighted.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="syntax-string">$1$2$1</span>');
      
      // Numbers
      highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, '<span class="syntax-number">$1</span>');
      
      // Comments
      highlighted = highlighted.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="syntax-comment">$1</span>');
      
      // Functions
      highlighted = highlighted.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span class="syntax-function">$1</span>');
      
      // Variables (simple detection)
      highlighted = highlighted.replace(/\b(let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '$1 <span class="syntax-variable">$2</span>');
    }
    
    // Python highlighting
    else if (language.toLowerCase().includes('python')) {
      // Keywords
      highlighted = highlighted.replace(/\b(def|class|if|else|elif|for|while|try|except|finally|with|as|import|from|return|yield|lambda|and|or|not|in|is|None|True|False|break|continue|pass|raise|assert|del|global|nonlocal)\b/g, '<span class="syntax-keyword">$1</span>');
      
      // Strings
      highlighted = highlighted.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="syntax-string">$1$2$1</span>');
      
      // Numbers
      highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, '<span class="syntax-number">$1</span>');
      
      // Comments
      highlighted = highlighted.replace(/(#.*$)/gm, '<span class="syntax-comment">$1</span>');
      
      // Functions
      highlighted = highlighted.replace(/\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)/g, 'def <span class="syntax-function">$1</span>');
      
      // Classes
      highlighted = highlighted.replace(/\bclass\s+([a-zA-Z_][a-zA-Z0-9_]*)/g, 'class <span class="syntax-class">$1</span>');
    }
    
    // C# highlighting
    else if (language.toLowerCase().includes('c#')) {
      // Keywords
      highlighted = highlighted.replace(/\b(public|private|protected|internal|static|readonly|const|var|string|int|bool|double|float|decimal|char|byte|short|long|ulong|uint|ushort|sbyte|object|void|class|interface|struct|enum|namespace|using|if|else|switch|case|default|for|foreach|while|do|break|continue|return|try|catch|finally|throw|new|this|base|virtual|override|abstract|sealed|partial|async|await|lock|using|checked|unchecked|fixed|unsafe|extern|volatile|ref|out|in|params|where|select|from|group|orderby|let|join|into|on|equals|by|ascending|descending)\b/g, '<span class="syntax-keyword">$1</span>');
      
      // Strings
      highlighted = highlighted.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="syntax-string">$1$2$1</span>');
      
      // Numbers
      highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, '<span class="syntax-number">$1</span>');
      
      // Comments
      highlighted = highlighted.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="syntax-comment">$1</span>');
      
      // Methods
      highlighted = highlighted.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, '<span class="syntax-function">$1</span>');
    }
    
    // CSS highlighting
    else if (language.toLowerCase().includes('css')) {
      // Properties
      highlighted = highlighted.replace(/([a-zA-Z-]+)(\s*:)/g, '<span class="syntax-property">$1</span>$2');
      
      // Values
      highlighted = highlighted.replace(/:\s*([^;]+);/g, ': <span class="syntax-value">$1</span>;');
      
      // Selectors
      highlighted = highlighted.replace(/([.#]?[a-zA-Z][a-zA-Z0-9_-]*)(?=\s*[.{])/g, '<span class="syntax-selector">$1</span>');
      
      // Comments
      highlighted = highlighted.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="syntax-comment">$1</span>');
    }
    
    return highlighted;
  };

  // Kodu karakter karakter highlight et
  const highlightCode = (targetCode, userInput) => {
    if (!targetCode) {
      return '';
    }

    if (!userInput) {
      // Sadece temiz kod göster
      return targetCode.replace(/ /g, '&nbsp;').replace(/\n/g, '<br>');
    }

    // Basit karakter bazlı highlighting
    let result = '';
    const inputLength = Math.min(userInput.length, targetCode.length);
    
    for (let i = 0; i < targetCode.length; i++) {
      const targetChar = targetCode[i];
      const inputChar = userInput[i] || '';
      
      if (i < inputLength) {
        if (targetChar === inputChar) {
          // Doğru karakter - yeşil
          result += `<span class="char-correct">${targetChar === ' ' ? '&nbsp;' : targetChar}</span>`;
        } else {
          // Yanlış karakter - kırmızı
          result += `<span class="char-incorrect">${targetChar === ' ' ? '&nbsp;' : targetChar}</span>`;
        }
      } else {
        // Henüz yazılmamış karakter - normal
        result += targetChar === ' ' ? '&nbsp;' : targetChar;
      }
    }

    return result;
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

  // Dil seçimine göre kod örneği al
  const getCodeByLanguage = (language) => {
    if (language === 'all') {
      return getRandomCodeExample();
    }
    
    const filteredExamples = codeExamples.filter(example => 
      example.language.toLowerCase() === language.toLowerCase()
    );
    
    if (filteredExamples.length === 0) {
      return getRandomCodeExample(); // Fallback
    }
    
    const randomIndex = Math.floor(Math.random() * filteredExamples.length);
    return filteredExamples[randomIndex];
  };

  // Oyunu başlat
  const startGame = () => {
    // Eğer AI kod örnekleri seçiliyse ve mevcut kod varsa, aynı koddan devam et
    if (useAICodes && currentCode && currentCode.isAIGenerated) {
      // Aynı koddan devam et, yeni kod yükleme
      setUserInput('');
      setTimeLeft(selectedDuration);
      setIsGameActive(true);
      setFeedback('');
      setScore(0);
      setGameStats({ correct: 0, incorrect: 0, total: 0 });
      setLastCorrectWords(0);
    } else {
      // Normal akış: yeni kod yükle
      const newCode = getCodeByLanguage(selectedLanguage);
      setCurrentCode(newCode);
      setUserInput('');
      setTimeLeft(selectedDuration);
      setIsGameActive(true);
      setFeedback('');
      setScore(0);
      setGameStats({ correct: 0, incorrect: 0, total: 0 });
      setLastCorrectWords(0);
    }
    
    // Timer başlat
    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Süre bitti, yeni kod yükle
          loadNewCode();
          return selectedDuration;
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
    let newCode;
    
    if (useAICodes && aiCodeExamples.length > 0) {
      // AI kod örneklerinden rastgele seç
      const randomIndex = Math.floor(Math.random() * aiCodeExamples.length);
      newCode = aiCodeExamples[randomIndex];
    } else {
      // Statik kod örneklerinden seç
      newCode = getCodeByLanguage(selectedLanguage);
    }
    
    setCurrentCode(newCode);
    setUserInput('');
    setFeedback('');
    setHighlightedCode('');
    setLastCorrectWords(0);
    
    // Code display'i en üste scroll yap
    setTimeout(() => {
      if (codeDisplayRef.current) {
        codeDisplayRef.current.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, 100);
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

    // Input syntax highlighting uygula
    if (textareaRef.current && currentCode) {
      const highlightedInput = syntaxHighlight(input, currentCode.language);
      // Input alanına syntax highlighting uygulamak için özel bir yaklaşım gerekir
      // Şimdilik basit tutuyoruz, gelecekte geliştirilebilir
    }

    // Auto-scroll: Cursor pozisyonuna göre scroll
    setTimeout(() => {
      if (textareaRef.current) {
        const textarea = textareaRef.current;
        const cursorPosition = textarea.selectionStart;
        const textareaHeight = textarea.clientHeight;
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 20;
        const linesFromTop = (textarea.value.substring(0, cursorPosition).match(/\n/g) || []).length;
        const cursorTop = linesFromTop * lineHeight;
        
        // Cursor görünür alanda değilse scroll yap
        if (cursorTop > textarea.scrollTop + textareaHeight - lineHeight) {
          textarea.scrollTop = cursorTop - textareaHeight + lineHeight * 2;
        } else if (cursorTop < textarea.scrollTop) {
          textarea.scrollTop = cursorTop - lineHeight;
        }
      }
      
      // Code display auto-scroll
      scrollCodeDisplay(input);
    }, 0);

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
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (e.shiftKey) {
        removeTab();
      } else {
        insertTab();
      }
    }
  };

  // Tab karakteri ekle
  const insertTab = () => {
    if (!isGameActive) return;
    
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    
    // Tab karakteri (2 boşluk) ekle
    const newValue = value.substring(0, start) + '  ' + value.substring(end);
    
    setUserInput(newValue);
    
    // Cursor pozisyonunu güncelle ve auto-scroll
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + 2;
      
      // Auto-scroll
      const cursorPosition = textarea.selectionStart;
      const textareaHeight = textarea.clientHeight;
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 20;
      const linesFromTop = (textarea.value.substring(0, cursorPosition).match(/\n/g) || []).length;
      const cursorTop = linesFromTop * lineHeight;
      
      if (cursorTop > textarea.scrollTop + textareaHeight - lineHeight) {
        textarea.scrollTop = cursorTop - textareaHeight + lineHeight * 2;
      }
    }, 0);
  };

  // Tab karakteri çıkar (Shift+Tab)
  const removeTab = () => {
    if (!isGameActive) return;
    
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    
    // Cursor'dan önceki 2 karakteri kontrol et
    if (start >= 2 && value.substring(start - 2, start) === '  ') {
      // 2 boşluk varsa çıkar
      const newValue = value.substring(0, start - 2) + value.substring(start);
      setUserInput(newValue);
      
      // Cursor pozisyonunu güncelle ve auto-scroll
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start - 2;
        
        // Auto-scroll
        const cursorPosition = textarea.selectionStart;
        const textareaHeight = textarea.clientHeight;
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 20;
        const linesFromTop = (textarea.value.substring(0, cursorPosition).match(/\n/g) || []).length;
        const cursorTop = linesFromTop * lineHeight;
        
        if (cursorTop < textarea.scrollTop) {
          textarea.scrollTop = cursorTop - lineHeight;
        }
      }, 0);
    }
  };

  // Code display auto-scroll
  const scrollCodeDisplay = (userInput) => {
    if (!currentCode || !codeDisplayRef.current) return;
    
    const codeDisplay = codeDisplayRef.current;
    const inputLength = userInput.length;
    const targetCode = currentCode.code;
    
    // Kullanıcının yazdığı kısma göre scroll pozisyonu hesapla
    const progress = Math.min(inputLength / targetCode.length, 1);
    const maxScroll = codeDisplay.scrollHeight - codeDisplay.clientHeight;
    const targetScroll = maxScroll * progress;
    
    // Smooth scroll
    codeDisplay.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  // AI kod örneklerini yükle
  const loadAICodeExamples = async () => {
    setIsLoadingAI(true);
    setCacheStatus('Yükleniyor...');
    
    try {
      const examples = await fetchTrendingCodeExamples(selectedLanguage === 'all' ? 'all' : selectedLanguage, 10);
      setAiCodeExamples(examples);
      
      // Cache durumunu kontrol et
      const cacheKey = selectedLanguage === 'all' ? 'all' : selectedLanguage;
      const cached = localStorage.getItem(`ai_code_examples_${cacheKey}`);
      if (cached) {
        const data = JSON.parse(cached);
        const now = Date.now();
        const age = Math.floor((now - data.timestamp) / (1000 * 60)); // dakika cinsinden
        setCacheStatus(`Cache'den (${age} dk önce)`);
      } else {
        setCacheStatus('Yeni yüklendi');
      }
    } catch (error) {
      console.error('Error loading AI code examples:', error);
      setCacheStatus('Hata oluştu');
    } finally {
      setIsLoadingAI(false);
    }
  };

  // Component mount olduğunda sadece temizlik yap
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Dil değiştiğinde yeni kod yükle (oyun aktif değilse)
  useEffect(() => {
    if (!isGameActive) {
      const newCode = getCodeByLanguage(selectedLanguage);
      setCurrentCode(newCode);
      setUserInput('');
      setHighlightedCode('');
      setLastCorrectWords(0);
    }
  }, [selectedLanguage, isGameActive]);

  // Input'a odaklan
  useEffect(() => {
    if (isGameActive && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isGameActive, currentCode]);

  // AI kod örneklerini yükle
  useEffect(() => {
    if (useAICodes) {
      loadAICodeExamples();
    }
  }, [useAICodes, selectedLanguage]);

  // AI kod örnekleri yüklendiğinde yeni kod seç
  useEffect(() => {
    if (useAICodes && aiCodeExamples.length > 0 && !isGameActive) {
      loadNewCode();
    }
  }, [aiCodeExamples, useAICodes, isGameActive]);

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
        <div className="game-title-section">
          <h1 className="game-title">Kod Yazma Pratiği</h1>
          <div className="game-subtitle">Hızınızı test edin ve kodlama becerilerinizi geliştirin</div>
        </div>
        <div className="timer-section">
          <div className="timer">
            {formatTime(timeLeft)}
          </div>
          <div className="timer-label">Kalan Süre</div>
        </div>
      </div>

      <div className="game-settings">
        <div className="settings-card">
          <div className="language-selector">
            <Code size={14} className="selector-icon" />
            <select
              id="language-select"
              className="language-select"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              disabled={isGameActive}
            >
              <option value="all">Tüm Diller (Rastgele)</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Python">Python</option>
              <option value="CSS">CSS</option>
              <option value="C#">C#</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Vue.js">Vue.js</option>
            </select>
          </div>

          <div className="duration-selector">
            <Clock size={16} className="selector-icon" />
            <select
              id="duration-select"
              className="duration-select"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(parseInt(e.target.value))}
              disabled={isGameActive}
            >
              <option value={30}>30 Saniye</option>
              <option value={60}>1 Dakika</option>
              <option value={120}>2 Dakika</option>
              <option value={180}>3 Dakika</option>
              <option value={300}>5 Dakika</option>
              <option value={600}>10 Dakika</option>
            </select>
          </div>

          <div className="ai-selector">
            <Cpu size={16} className="selector-icon" />
            <div className="ai-toggle">
              <label className="ai-toggle-label">
                <input
                  type="checkbox"
                  checked={useAICodes}
                  onChange={(e) => {
                    setUseAICodes(e.target.checked);
                    if (e.target.checked && !isGameActive) {
                      // AI kodları yüklendikten sonra yeni kod seçilecek
                    } else if (!e.target.checked && !isGameActive) {
                      // Statik kodlara geri dön
                      loadNewCode();
                    }
                  }}
                  disabled={isGameActive}
                />
                <span className="ai-toggle-text">
                  {isLoadingAI ? 'Yükleniyor...' : 'AI Kod Örnekleri'}
                  {cacheStatus && !isLoadingAI && (
                    <span className="cache-status"> ({cacheStatus})</span>
                  )}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {currentCode && (
        <>
          <div className="code-info">
            <div className="code-info-content">
              <div className="code-header">
                <div className="code-language">
                  <Code size={12} className="language-icon" />
                  <span className="language-name">{currentCode.language}</span>
                  {currentCode.isAIGenerated && (
                    <span className="ai-badge">
                      <Cpu size={10} style={{marginRight: '4px'}} />
                      AI
                    </span>
                  )}
                </div>
                <div className="code-title">
                  {currentCode.title}
                  {currentCode.source && (
                    <span className="code-source"> - {currentCode.source}</span>
                  )}
                </div>
              </div>
              <div className="stats-row">
                <div className="stat-item">
                  <Award size={12} className="stat-icon" />
                  <span className="stat-value">{score}</span>
                  <span className="stat-label">Skor</span>
                </div>
                <div className="stat-item">
                  <Check size={12} className="stat-icon" />
                  <span className="stat-value">{gameStats.correct}</span>
                  <span className="stat-label">Doğru</span>
                </div>
                <div className="stat-item">
                  <X size={12} className="stat-icon" />
                  <span className="stat-value">{gameStats.incorrect}</span>
                  <span className="stat-label">Hata</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={codeDisplayRef}
            className="code-display"
            dangerouslySetInnerHTML={{
              __html: highlightedCode || currentCode.code.replace(/ /g, '&nbsp;').replace(/\n/g, '<br>')
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
          <Play size={14} style={{marginRight: '6px'}} />
          {currentCode ? 'Oyunu Başlat' : 'İlk Kodu Yükle'}
        </button>
      ) : (
        <button className="control-button secondary" onClick={stopGame}>
          <Pause size={14} style={{marginRight: '6px'}} />
          Duraklat
        </button>
      )}
        
        <button className="control-button danger" onClick={endGame}>
          <Square size={14} style={{marginRight: '6px'}} />
          Oyunu Bitir
        </button>
      </div>

      <div className="game-instructions">
        <p><strong>Kısayollar:</strong></p>
        <p>ESC - Oyunu duraklat | F1 - Oyunu başlat</p>
        <p>TAB - Girinti ekle (2 boşluk) | Shift+TAB - Girinti azalt</p>
        <p>Her {Math.floor(selectedDuration / 60)} dakika yeni bir kod örneği yüklenecek!</p>
      </div>
    </div>
  );
};

export default TypingGame;
