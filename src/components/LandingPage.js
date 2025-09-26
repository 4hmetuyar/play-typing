import React from 'react';

const LandingPage = ({ onStartGame }) => {
  return (
    <div className="landing-page">
      <div className="container">
        <div className="hero-section">
          <h1 className="hero-title">Play Typing</h1>
          <p className="hero-subtitle">
            Geliştiriciler için interaktif kod yazma pratiği uygulaması. 
            Hızınızı artırın, kodlama becerilerinizi geliştirin!
          </p>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Hızlı Öğrenme</h3>
            <p className="feature-description">
              Timer ile sınırlı sürede kod yazarak hızınızı artırın ve 
              gerçek proje ortamına hazırlanın.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Anlık Geri Bildirim</h3>
            <p className="feature-description">
              Her karakter için anlık doğru/yanlış geri bildirimi alın. 
              Hatalarınızı anında görün ve düzeltin.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3 className="feature-title">Çeşitli Kod Örnekleri</h3>
            <p className="feature-description">
              Her dakika farklı kod örnekleri ile çalışın. 
              JavaScript, Python, React ve daha fazlası!
            </p>
          </div>
        </div>

        <button className="start-button" onClick={onStartGame}>
          Oyunu Başlat 🚀
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
