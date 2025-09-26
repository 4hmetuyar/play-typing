// Ses sistemi için yardımcı fonksiyonlar

// AudioContext'i güvenli şekilde oluştur
let audioContext = null;

const getAudioContext = () => {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      console.log('AudioContext oluşturulamadı:', error);
      return null;
    }
  }
  
  // AudioContext suspended durumda ise resume et
  if (audioContext.state === 'suspended') {
    audioContext.resume().catch(error => {
      console.log('AudioContext resume edilemedi:', error);
      return null;
    });
  }
  
  return audioContext;
};

// Doğru harf sesi - yüksek ton, kısa
export const playCorrectSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.setValueAtTime(800, ctx.currentTime); // Yüksek ton
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  } catch (error) {
    console.log('Ses çalınamadı:', error);
  }
};

// Yanlış harf sesi - düşük ton, kısa
export const playIncorrectSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.setValueAtTime(200, ctx.currentTime); // Düşük ton
    oscillator.type = 'sawtooth';
    
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.15);
  } catch (error) {
    console.log('Ses çalınamadı:', error);
  }
};

// Kelime tamamlama sesi - orta ton, kısa
export const playWordCompleteSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.setValueAtTime(600, ctx.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.12);
  } catch (error) {
    console.log('Ses çalınamadı:', error);
  }
};

// Oyun başlama sesi - çift ton
export const playGameStartSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    // İlk ton
    const oscillator1 = ctx.createOscillator();
    const gainNode1 = ctx.createGain();
    oscillator1.connect(gainNode1);
    gainNode1.connect(ctx.destination);
    
    oscillator1.frequency.setValueAtTime(400, ctx.currentTime);
    oscillator1.type = 'sine';
    gainNode1.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    
    oscillator1.start(ctx.currentTime);
    oscillator1.stop(ctx.currentTime + 0.2);
    
    // İkinci ton
    setTimeout(() => {
      const oscillator2 = ctx.createOscillator();
      const gainNode2 = ctx.createGain();
      oscillator2.connect(gainNode2);
      gainNode2.connect(ctx.destination);
      
      oscillator2.frequency.setValueAtTime(600, ctx.currentTime);
      oscillator2.type = 'sine';
      gainNode2.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      
      oscillator2.start(ctx.currentTime);
      oscillator2.stop(ctx.currentTime + 0.2);
    }, 100);
  } catch (error) {
    console.log('Ses çalınamadı:', error);
  }
};

// Oyun bitiş sesi - düşen ton
export const playGameEndSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.setValueAtTime(600, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.5);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.5);
  } catch (error) {
    console.log('Ses çalınamadı:', error);
  }
};
