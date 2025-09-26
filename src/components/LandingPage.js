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
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)'
    },
    {
      icon: '🎯',
      title: 'Anlık Geri Bildirim',
      description: 'Her karakter için anlık doğru/yanlış geri bildirimi alın. Hatalarınızı anında görün ve düzeltin.',
      color: '#4ecdc4',
      gradient: 'linear-gradient(135deg, #4ecdc4, #44a08d)'
    },
    {
      icon: '🔄',
      title: 'Çeşitli Kod Örnekleri',
      description: 'Her dakika farklı kod örnekleri ile çalışın. JavaScript, Python, React ve daha fazlası!',
      color: '#45b7d1',
      gradient: 'linear-gradient(135deg, #45b7d1, #2196f3)'
    },
    {
      icon: '🎨',
      title: 'Temiz Kod Görünümü',
      description: 'Profesyonel kod editörü deneyimi. Temiz ve okunabilir kod gösterimi ile.',
      color: '#96ceb4',
      gradient: 'linear-gradient(135deg, #96ceb4, #4caf50)'
    },
    {
      icon: '📱',
      title: 'Responsive Tasarım',
      description: 'Mobil, tablet ve masaüstünde mükemmel çalışır. Her cihazda optimize edilmiş deneyim.',
      color: '#feca57',
      gradient: 'linear-gradient(135deg, #feca57, #ff9800)'
    },
    {
      icon: '🏆',
      title: 'Puanlama Sistemi',
      description: 'Kelime bazlı puanlama ile ilerlemenizi takip edin. Her doğru kelime +50 puan!',
      color: '#ff9ff3',
      gradient: 'linear-gradient(135deg, #ff9ff3, #e91e63)'
    },
    {
      icon: '🤖',
      title: 'AI Kod Örnekleri',
      description: 'GitHub\'dan güncel ve popüler kod örnekleri. AI destekli kod analizi ile gerçek projelerden örnekler.',
      color: '#a8e6cf',
      gradient: 'linear-gradient(135deg, #a8e6cf, #4caf50)'
    },
    {
      icon: '🔊',
      title: 'Sesli Geri Bildirim',
      description: 'Hata yaptığınızda sesli uyarı alın. Web Audio API ile profesyonel ses deneyimi.',
      color: '#ffd93d',
      gradient: 'linear-gradient(135deg, #ffd93d, #ff9800)'
    },
    {
      icon: '📢',
      title: 'Akıllı Bildirimler',
      description: 'Oyun olayları için toast bildirimleri. Başarı ve hata durumlarında anlık bilgilendirme.',
      color: '#b4a7d6',
      gradient: 'linear-gradient(135deg, #b4a7d6, #9c27b0)'
    },
    {
      icon: '⌨️',
      title: 'Tab Desteği',
      description: 'Tab ve Shift+Tab ile indentation yapın. Gerçek kod editörü deneyimi yaşayın.',
      color: '#a8e6cf',
      gradient: 'linear-gradient(135deg, #a8e6cf, #4caf50)'
    },
    {
      icon: '📊',
      title: 'İstatistikler',
      description: 'Detaylı performans analizi. Doğru/yanlış kelime sayıları ve hız metrikleri.',
      color: '#ffd3a5',
      gradient: 'linear-gradient(135deg, #ffd3a5, #ff9800)'
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
              <span className="highlight">AI destekli kod örnekleri</span>, 
              <span className="highlight">sesli geri bildirim</span> ve 
              <span className="highlight"> akıllı bildirimler</span> ile!
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Programlama Dili</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">🤖</span>
                <span className="stat-label">AI Kod Örnekleri</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">🔊</span>
                <span className="stat-label">Sesli Geri Bildirim</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">📢</span>
                <span className="stat-label">Akıllı Bildirimler</span>
              </div>
            </div>

            <div className="hero-cta">
              <button className="cta-button" onClick={handleStartGame}>
                <span className="cta-text">Hemen Başla</span>
                <span className="cta-icon">🚀</span>
                <div className="cta-ripple" />
              </button>
              <p className="cta-subtitle">Ücretsiz • Kayıt Gerektirmez • Anında Başla</p>
            </div>
          </div>
        </div>

        <div className={`features ${isVisible ? 'visible' : ''}`}>
          <h2 className="features-title">Özellikler</h2>
          <p className="features-subtitle">Geliştiriciler için tasarlanmış modern özellikler</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${currentFeature === index ? 'active' : ''}`}
                style={{ 
                  '--feature-color': feature.color,
                  '--feature-gradient': feature.gradient
                }}
                onMouseEnter={() => setCurrentFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-glow" />
                <div className="feature-border" />
              </div>
            ))}
          </div>
        </div>

        <div className={`testimonial ${isVisible ? 'visible' : ''}`}>
          <h2 className="testimonial-title">Geliştiriciler Ne Diyor?</h2>
          <div className="testimonial-content">
            <div className="testimonial-text">
              "AI kod örnekleri ve sesli geri bildirim sayesinde kod yazma hızım %40 arttı. Gerçek proje ortamına çok daha hazır hissediyorum!"
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">👨‍💻</div>
              <div className="author-info">
                <div className="author-name">Ahmet Y.</div>
                <div className="author-title">Frontend Developer</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default LandingPage;
