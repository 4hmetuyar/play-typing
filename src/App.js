import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import TypingGame from './components/TypingGame';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  const endGame = () => {
    setGameStarted(false);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <LandingPage onStartGame={startGame} />
      ) : (
        <TypingGame onEndGame={endGame} />
      )}
    </div>
  );
}

export default App;
