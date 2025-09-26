import React, { useState, useEffect } from 'react';

const LandingPage = ({ onStartGame }) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const features = [
    {
      icon: '⚡',
      title: 'Hızlı Öğrenme',
      description: 'Timer ile sınırlı sürede kod yazarak hızınızı artırın ve gerçek proje ortamına hazırlanın.',
      color: '#ff6b6b'
    },
    {
      icon: '🎯',
      title: 'Anlık Geri Bildirim',
      description: 'Her karakter için anlık doğru/yanlış geri bildirimi alın. Hatalarınızı anında görün ve düzeltin.',
      color: '#4ecdc4'
    },
    {
      icon: '🔄',
      title: 'Çeşitli Kod Örnekleri',
      description: 'Her dakika farklı kod örnekleri ile çalışın. JavaScript, Python, React ve daha fazlası!',
      color: '#45b7d1'
    },
    {
      icon: '🎨',
      title: 'VSCode Syntax Highlighting',
      description: 'Profesyonel kod editörü deneyimi. Keywords, strings, numbers renklendirme ile.',
      color: '#96ceb4'
    },
    {
      icon: '📱',
      title: 'Responsive Tasarım',
      description: 'Mobil, tablet ve masaüstünde mükemmel çalışır. Her cihazda optimize edilmiş deneyim.',
      color: '#feca57'
    },
    {
      icon: '🏆',
      title: 'Puanlama Sistemi',
      description: 'Kelime bazlı puanlama ile ilerlemenizi takip edin. Her doğru kelime +50 puan!',
      color: '#ff9ff3'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleStartGame = () => {
    // Button click animasyonu
    const button = document.querySelector('.start-button');
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
      onStartGame();
    }, 150);
  };

  return (
    <div className="landing-page">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="floating-shapes">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="floating-shape"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Mouse follower */}
      <div 
        className="mouse-follower"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10
        }}
      />

      {/* Sağ üst köşe butonu */}
      <div className="top-right-button">
        <button className="start-button" onClick={handleStartGame}>
          <span className="button-text">Oyunu Başlat</span>
          <span className="button-icon">🚀</span>
          <div className="button-ripple" />
        </button>
      </div>

      <div className="container">
        <div className={`hero-section ${isVisible ? 'visible' : ''}`}>
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-word">Play</span>
              <span className="title-word">Typing</span>
            </h1>
            <p className="hero-subtitle">
              Geliştiriciler için interaktif kod yazma pratiği uygulaması. 
              <br />
              <span className="highlight">Hızınızı artırın</span>, 
              <span className="highlight">kodlama becerilerinizi geliştirin</span>!
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Programlama Dili</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Kod Satırı</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Pratik Yapma</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`features ${isVisible ? 'visible' : ''}`}>
          <h2 className="features-title">Özellikler</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${currentFeature === index ? 'active' : ''}`}
                style={{ '--feature-color': feature.color }}
                onMouseEnter={() => setCurrentFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-glow" />
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default LandingPage;
