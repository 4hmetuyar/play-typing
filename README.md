# Play Typing - Kod Yazma Pratiği Uygulaması

Geliştiriciler için interaktif kod yazma pratiği uygulaması. VSCode benzeri syntax highlighting, dil seçimi, süre ayarlama ve gerçek zamanlı geri bildirim ile kod yazma hızınızı artırın!

## 🌐 Canlı Demo

**🚀 [https://4hmetuyar.github.io/play-typing/](https://4hmetuyar.github.io/play-typing/)**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Play%20Typing-green?style=for-the-badge&logo=github)](https://4hmetuyar.github.io/play-typing/)

## 🚀 Özellikler

### 🎯 Temel Özellikler
- **Özelleştirilebilir Timer**: 30 saniye - 10 dakika arası süre seçimi
- **Dil Seçimi**: 8 farklı programlama dili desteği
- **VSCode Benzeri Syntax Highlighting**: Keywords, strings, numbers, comments renklendirme
- **Anlık Geri Bildirim**: Doğru/yanlış karakterler için renkli geri bildirim
- **Kelime Bazlı Puanlama**: Her doğru kelime için +50 puan
- **Auto-Scroll**: Kod yazarken otomatik scroll
- **Tab Desteği**: Girinti ekleme/çıkarma (Tab/Shift+Tab)

### 🎨 Gelişmiş Özellikler
- **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu
- **Flexbox Layout**: Dikey scroll olmadan tam ekran deneyim
- **Smooth Animasyonlar**: Yumuşak geçişler ve hover efektleri
- **Klavye Kısayolları**: Hızlı kontrol için
- **Real-time Statistics**: Doğru/yanlış kelime sayıları
- **🤖 AI Kod Örnekleri**: GitHub'dan güncel kod örnekleri
- **💾 Cache Sistemi**: localStorage ile hızlı yükleme
- **🔄 Fallback Sistemi**: API hatası durumunda mock data
- **🔊 Ses Sistemi**: Hata durumunda sesli geri bildirim
- **📢 Toast Bildirimleri**: Oyun olayları için bildirimler
- **🎵 Web Audio API**: Programatik ses üretimi

## 🛠️ Teknolojiler

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: CSS3 (Flexbox, Grid, Animations, Custom Properties)
- **Syntax Highlighting**: Custom regex-based highlighting
- **State Management**: React Hooks (useState, useEffect, useRef)
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized rendering, smooth animations
- **AI Integration**: GitHub API + Mock Data fallback
- **Caching**: localStorage with 24-hour expiration
- **API Management**: Rate limit handling, error recovery
- **Audio**: Web Audio API for sound generation
- **Notifications**: react-hot-toast for user feedback
- **Icons**: react-feather for consistent iconography

## 📦 Kurulum

### 🚀 Hızlı Başlangıç
**Canlı demo için:** [https://4hmetuyar.github.io/play-typing/](https://4hmetuyar.github.io/play-typing/)

### 💻 Yerel Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/4hmetuyar/play-typing.git
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

### 🌐 GitHub Pages Deploy

#### Otomatik Build (GitHub Actions)
Her commit'de otomatik olarak build edilir:
```bash
git add .
git commit -m "feat: yeni özellik"
git push origin main
# GitHub Actions otomatik build yapacak
```

#### Manuel Deploy
```bash
npm run deploy
```

#### GitHub Pages Ayarları
1. **GitHub Repository** > **Settings** > **Pages**
2. **Source**: **Deploy from a branch**
3. **Branch**: **gh-pages** seçin
4. **Folder**: **/ (root)** seçin
5. **Save**

#### Build Artifacts
- **GitHub Actions** > **Build for GitHub Pages** > **build-files**
- Build dosyalarını indirip manuel olarak deploy edebilirsiniz

## 🎮 Nasıl Oynanır

### 🚀 Başlangıç
1. **Dil Seçin**: Programlama dilini dropdown'dan seçin
2. **Süre Belirleyin**: 30 saniye - 10 dakika arası süre seçin
3. **AI Kod Örnekleri**: 🤖 checkbox'ını işaretleyerek güncel kod örnekleri kullanın
4. **Oyunu Başlat**: "İlk Kodu Yükle" butonuna tıklayın

### ⌨️ Yazma Deneyimi
1. **Kodu Yazın**: Ekranda görünen kodu aynen yazın
2. **Syntax Highlighting**: VSCode benzeri renkli kod görünümü
3. **Geri Bildirim Alın**: 
   - ✅ **Yeşil**: Doğru yazdınız (+50 puan/kelime)
   - ❌ **Kırmızı**: Hata var
   - 🎨 **Renkli**: Syntax highlighting korunur
4. **Tab Kullanın**: Girinti için Tab, çıkarmak için Shift+Tab
5. **Auto-Scroll**: Uzun kodlarda otomatik scroll

### 🏆 Puanlama Sistemi
- **Kelime Bazlı**: Her doğru kelime +50 puan
- **Tam Kod Bonusu**: +200 bonus puan
- **Real-time Stats**: Doğru/yanlış kelime sayıları
- **Süre Takibi**: Seçilen süre kadar geri sayım

## ⌨️ Klavye Kısayolları

### 🎮 Oyun Kontrolleri
- `ESC`: Oyunu duraklat/devam ettir
- `F1`: Oyunu başlat

### ⌨️ Kod Yazma
- `Tab`: Girinti ekle (2 boşluk)
- `Shift + Tab`: Girinti azalt
- `Enter`: Yeni satır
- `Backspace`: Karakter sil

### 🎯 Odaklanma
- `Tab`: Input alanına odaklan
- `Click`: Manuel odaklanma

## 📱 Responsive Tasarım

### 🖥️ Cihaz Desteği
- **📱 Mobil**: 320px+ (99vh yükseklik, kompakt layout)
- **📱 Tablet**: 768px+ (98vh yükseklik, grid layout)
- **💻 Masaüstü**: 1024px+ (95vh yükseklik, geniş layout)

### 🎨 Layout Özellikleri
- **Flexbox Layout**: Dikey scroll olmadan tam ekran
- **Grid System**: Dil seçici ve süre seçici yan yana
- **Auto-Scroll**: Uzun kodlarda otomatik scroll
- **Smooth Animations**: Yumuşak geçişler ve hover efektleri

## 🎯 Desteklenen Diller

### 🔥 Ana Diller
- **JavaScript**: ES6+, Array Methods, Async/Await, Promises
- **React**: Hooks, Components, Custom Hooks, JSX
- **Python**: List Comprehensions, Functions, Classes, Decorators
- **CSS**: Flexbox, Grid, Animations, Selectors

### 🆕 Yeni Eklenen Diller
- **C#**: Classes, Properties, LINQ, Async/Await
- **TypeScript**: Interfaces, Generics, Type Safety
- **Vue.js**: Composition API, Templates, Reactive Data

### 🎨 Syntax Highlighting
Her dil için VSCode benzeri renklendirme:
- **Keywords**: `const`, `function`, `if`, `class` (Mor)
- **Strings**: `"string"`, `'string'`, `` `template` `` (Yeşil)
- **Numbers**: `123`, `3.14` (Turuncu)
- **Comments**: `// comment`, `/* comment */` (Gri)
- **Functions**: `functionName()` (Mavi)
- **Variables**: `let variableName` (Kırmızı)

## 🔧 Geliştirme

### 🚀 GitHub Actions Kurulumu

#### 1. GitHub Repository Ayarları
1. GitHub repository'nize gidin
2. **Settings** > **Pages** sekmesine gidin
3. **Source** olarak **GitHub Actions** seçin
4. Kaydedin

#### 2. Otomatik Deploy
- Her `main` branch'e push'da otomatik deploy
- Workflow dosyası: `.github/workflows/deploy.yml`
- Deploy durumu: **Actions** sekmesinde görülebilir

#### 3. Manuel Deploy
- GitHub Actions > Deploy to GitHub Pages > Run workflow
- Veya `npm run deploy` komutu

### 📁 Proje Yapısı
```
src/
├── components/
│   ├── LandingPage.js    # Ana sayfa bileşeni
│   └── TypingGame.js     # Oyun bileşeni (747 satır)
├── data/
│   └── codeExamples.js   # Kod örnekleri veritabanı (437 satır)
├── services/
│   └── githubService.js  # GitHub API + Cache servisi (380 satır)
├── App.js                # Ana uygulama
├── App.css               # Stil dosyası (responsive, animations)
├── index.js              # Giriş noktası
└── index.css             # Global stiller
```

### 🏗️ Mimari Detayları

#### **TypingGame.js Ana Bileşeni**
- **State Management**: 20+ state değişkeni
- **Syntax Highlighting**: Custom regex-based highlighting
- **Auto-Scroll**: Input ve code display için
- **Tab Support**: Girinti ekleme/çıkarma
- **Real-time Feedback**: Karakter bazlı doğru/yanlış kontrolü
- **AI Integration**: GitHub API + Cache sistemi
- **Fallback System**: Mock data ile hata yönetimi

#### **CSS Mimarisi**
- **Flexbox Layout**: Dikey scroll olmadan tam ekran
- **Responsive Design**: 3 breakpoint (mobil, tablet, desktop)
- **Custom Properties**: CSS değişkenleri ile tema desteği
- **Animations**: Smooth transitions ve hover efektleri

#### **Syntax Highlighting Sistemi**
- **Regex Patterns**: Her dil için özel regex'ler
- **HTML Generation**: `dangerouslySetInnerHTML` ile render
- **Color Classes**: `.syntax-keyword`, `.syntax-string`, etc.
- **Overlay System**: Yazma feedback'i ile syntax highlighting korunur

#### **GitHub Service Sistemi**
- **API Integration**: GitHub API ile trending repository'ler
- **Cache Management**: localStorage ile 24 saatlik cache
- **Mock Data**: API limitine takıldığında fallback
- **Error Handling**: Rate limit ve network hatalarını yönetme
- **Code Analysis**: AI benzeri kod pattern analizi

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

## 🤖 AI Kod Örnekleri Sistemi

### 🔥 GitHub API Entegrasyonu
- **Trending Repository'ler**: Facebook/React, Vercel/Next.js, Microsoft/VSCode
- **Otomatik Kod Analizi**: Pattern detection ve complexity scoring
- **Dil Tespiti**: Dosya uzantısından otomatik dil belirleme
- **Zorluk Seviyesi**: Başlangıç, Orta, İleri, Uzman

### 💾 Cache Sistemi
- **localStorage**: 24 saatlik cache süresi
- **Dil Bazlı Cache**: Her dil için ayrı cache
- **Otomatik Yenileme**: Cache süresi dolunca otomatik güncelleme
- **Cache Durumu**: Kullanıcıya cache yaşı gösterimi

### 🔄 Fallback Sistemi
- **Mock Data**: API limitine takıldığında gerçekçi örnekler
- **Error Handling**: Rate limit ve network hatalarını yönetme
- **Graceful Degradation**: Hata durumunda bile çalışmaya devam
- **User Experience**: Kullanıcı fark etmeden geçiş

### 🎯 AI Kod Analizi
- **Pattern Detection**: Hooks, functions, classes sayımı
- **Complexity Scoring**: Kod uzunluğu ve karmaşıklık analizi
- **Language-Specific**: Her dil için özel analiz kuralları
- **Real-time Processing**: Anlık kod analizi

## 📈 Gelecek Özellikler

### 🚀 Planlanan Özellikler
- [ ] **Daha Fazla Dil**: Go, Rust, Java, PHP, Ruby
- [ ] **Zorluk Seviyeleri**: Başlangıç, Orta, İleri, Uzman
- [ ] **Kullanıcı Profilleri**: Kayıt, giriş, istatistik takibi
- [ ] **Çok Oyunculu Mod**: Rekabet ve işbirliği
- [ ] **Ses Efektleri**: Yazma sesleri, başarı/hata sesleri
- [ ] **Tema Seçenekleri**: Dark/Light mode, renk paletleri

### 🎯 Gelişmiş Özellikler
- [ ] **Kod Tamamlama**: IntelliSense benzeri öneriler
- [ ] **Hata Analizi**: Syntax hatalarını tespit etme
- [ ] **Performans Metrikleri**: WPM, doğruluk oranı, hız grafikleri
- [ ] **Kod Snippets**: Hızlı kod parçacıkları
- [ ] **Export/Import**: Kod örneklerini dışa/içe aktarma

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🎉 Tamamlanan Özellikler

### ✅ V1.0 - Temel Özellikler
- [x] React.js tabanlı oyun motoru
- [x] Timer sistemi (1 dakika)
- [x] Doğru/yanlış karakter feedback'i
- [x] Responsive tasarım
- [x] Skor sistemi

### ✅ V2.0 - Gelişmiş Özellikler
- [x] Dil seçimi (8 dil)
- [x] Özelleştirilebilir süre (30s-10dk)
- [x] Kelime bazlı puanlama
- [x] Tab desteği (girinti)
- [x] Auto-scroll sistemi

### ✅ V3.0 - VSCode Benzeri Deneyim
- [x] Syntax highlighting (8 dil)
- [x] VSCode renk paleti
- [x] Flexbox layout (scroll yok)
- [x] Smooth animasyonlar
- [x] Real-time statistics

### ✅ V4.0 - AI Kod Örnekleri
- [x] GitHub API entegrasyonu
- [x] localStorage cache sistemi
- [x] Mock data fallback sistemi
- [x] AI kod analizi ve pattern detection
- [x] Cache durumu gösterimi
- [x] Rate limit hata yönetimi

### ✅ V5.0 - Ses Sistemi ve Bildirimler
- [x] Web Audio API entegrasyonu
- [x] Hata durumunda sesli geri bildirim
- [x] react-hot-toast bildirim sistemi
- [x] Oyun olayları için toast mesajları
- [x] Ses açma/kapama toggle butonu
- [x] AudioContext hata yönetimi
- [x] Programatik ses üretimi

### 🏆 Teknik Başarılar
- **813 satır** TypingGame.js bileşeni
- **437 satır** kod örnekleri veritabanı
- **380 satır** GitHub API servisi
- **167 satır** ses sistemi utilities
- **55 satır** App.js (toast entegrasyonu)
- **8 programlama dili** desteği
- **3 responsive breakpoint**
- **20+ state değişkeni**
- **Custom regex highlighting**
- **AI kod analizi sistemi**
- **24 saatlik cache sistemi**

## 👨‍💻 Geliştirici

Geliştirici kendini geliştirmek için oluşturulmuş bu proje, kod yazma hızınızı artırmanıza yardımcı olacak!

### 🚀 Proje İstatistikleri
- **Toplam Kod**: 1500+ satır
- **Geliştirme Süresi**: 2 gün
- **Desteklenen Diller**: 8
- **Responsive Breakpoint**: 3
- **Özellik Sayısı**: 25+
- **AI Entegrasyonu**: GitHub API + Cache
- **Canlı URL**: [https://4hmetuyar.github.io/play-typing](https://4hmetuyar.github.io/play-typing)
- **GitHub Repository**: [https://github.com/4hmetuyar/play-typing](https://github.com/4hmetuyar/play-typing)

---

**İyi kodlamalar! 🚀**
