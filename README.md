# Play Typing - Kod Yazma Pratiği Uygulaması

Geliştiriciler için interaktif kod yazma pratiği uygulaması. Timer ile sınırlı sürede kod yazarak hızınızı artırın ve kodlama becerilerinizi geliştirin!

## 🚀 Özellikler

- **Timer ile Pratik**: Her kod örneği için 60 saniye süre
- **Anlık Geri Bildirim**: Doğru/yanlış karakterler için renkli geri bildirim
- **Çeşitli Kod Örnekleri**: JavaScript, React, Python, CSS örnekleri
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **Skor Sistemi**: Başarılarınızı takip edin
- **Klavye Kısayolları**: Hızlı kontrol için

## 🛠️ Teknolojiler

- React 18
- CSS3 (Flexbox, Grid, Animations)
- JavaScript ES6+
- Responsive Design

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd play-typing
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Uygulamayı başlatın:
```bash
npm start
```

4. Tarayıcınızda `http://localhost:3000` adresini açın.

## 🎮 Nasıl Oynanır

1. **Oyunu Başlat**: Ana sayfada "Oyunu Başlat" butonuna tıklayın
2. **Kodu Yazın**: Ekranda görünen kodu aynen yazın
3. **Geri Bildirim Alın**: 
   - ✅ Yeşil: Doğru yazdınız
   - ❌ Kırmızı: Hata var
   - ⌨️ Gri: Yazmaya devam edin
4. **Yeni Kod**: Her dakika yeni bir kod örneği yüklenir
5. **Skorunuzu Takip Edin**: Doğru yazdığınız her kod için puan kazanın

## ⌨️ Klavye Kısayolları

- `ESC`: Oyunu duraklat/devam ettir
- `F1`: Oyunu başlat
- `Tab`: Input alanına odaklan

## 📱 Responsive Tasarım

Uygulama tüm cihazlarda mükemmel çalışır:
- 📱 Mobil (320px+)
- 📱 Tablet (768px+)
- 💻 Masaüstü (1024px+)

## 🎯 Kod Örnekleri

Uygulama şu programlama dillerinden örnekler içerir:
- JavaScript (ES6+, Array Methods, Async/Await)
- React (Hooks, Components, Custom Hooks)
- Python (List Comprehensions, Functions)
- CSS (Flexbox, Grid, Animations)

## 🔧 Geliştirme

### Proje Yapısı
```
src/
├── components/
│   ├── LandingPage.js    # Ana sayfa bileşeni
│   └── TypingGame.js     # Oyun bileşeni
├── data/
│   └── codeExamples.js   # Kod örnekleri veritabanı
├── App.js                # Ana uygulama
├── App.css               # Stil dosyası
├── index.js              # Giriş noktası
└── index.css             # Global stiller
```

### Yeni Kod Örneği Ekleme

`src/data/codeExamples.js` dosyasına yeni örnek ekleyin:

```javascript
{
  id: 7,
  language: 'TypeScript',
  title: 'Interface Example',
  code: `interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  isActive: true
};`
}
```

## 📈 Gelecek Özellikler

- [ ] Daha fazla programlama dili desteği
- [ ] Zorluk seviyeleri
- [ ] Kullanıcı profilleri ve istatistikler
- [ ] Çok oyunculu mod
- [ ] Kod syntax highlighting
- [ ] Ses efektleri

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

Geliştirici kendini geliştirmek için oluşturulmuş bu proje, kod yazma hızınızı artırmanıza yardımcı olacak!

---

**İyi kodlamalar! 🚀**
