import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import TypingGame from './components/TypingGame';
import { Toaster } from 'react-hot-toast';
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
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(26, 37, 47, 0.95)',
            color: '#f9fafb',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#f9fafb',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#f9fafb',
            },
          },
        }}
      />
    </div>
  );
}

export default App;
