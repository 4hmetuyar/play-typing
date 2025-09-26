# Play Typing - Code Typing Practice Application

Interactive code typing practice application for developers. Improve your coding speed with VSCode-like syntax highlighting, language selection, timer settings, and real-time feedback!

## 🌐 Live Demo

**🚀 [https://4hmetuyar.github.io/play-typing/](https://4hmetuyar.github.io/play-typing/)**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Play%20Typing-green?style=for-the-badge&logo=github)](https://4hmetuyar.github.io/play-typing/)

## 🚀 Features

### 🎯 Core Features
- **Customizable Timer**: 30 seconds - 10 minutes duration selection
- **Language Selection**: Support for 8 different programming languages
- **VSCode-like Syntax Highlighting**: Color coding for keywords, strings, numbers, comments
- **Real-time Feedback**: Color feedback for correct/incorrect characters
- **Word-based Scoring**: +50 points for each correct word
- **Auto-Scroll**: Automatic scrolling while typing code
- **Tab Support**: Indentation add/remove (Tab/Shift+Tab)

### 🎨 Advanced Features
- **Responsive Design**: Mobile, tablet and desktop compatible
- **Flexbox Layout**: Full-screen experience without vertical scroll
- **Smooth Animations**: Smooth transitions and hover effects
- **Keyboard Shortcuts**: For quick control
- **Real-time Statistics**: Correct/incorrect word counts
- **🤖 AI Code Examples**: Current code examples from GitHub
- **💾 Cache System**: Fast loading with localStorage
- **🔄 Fallback System**: Mock data in case of API errors
- **🔊 Sound System**: Audio feedback for typing errors
- **📢 Toast Notifications**: Notifications for game events
- **🎵 Web Audio API**: Programmatic sound generation

## 🛠️ Technologies

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

## 📦 Installation

### 🚀 Quick Start
**For live demo:** [https://4hmetuyar.github.io/play-typing/](https://4hmetuyar.github.io/play-typing/)

### 💻 Local Installation

```bash
# Clone the repository
git clone https://github.com/4hmetuyar/play-typing.git

# Navigate to project directory
cd play-typing

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000 in your browser
```

### 🚀 Production Build

```bash
# Create production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🎮 How to Play

### 🎯 Basic Gameplay
1. **Select Language**: Choose from 8 programming languages
2. **Set Duration**: Select game duration (30s - 10min)
3. **Start Game**: Click "Start Game" button
4. **Type Code**: Type the displayed code as fast as possible
5. **Get Feedback**: See real-time color feedback (green=correct, red=incorrect)
6. **Score Points**: Earn +50 points for each correct word
7. **Complete**: Finish the code to get bonus points

### 🎨 Advanced Features
- **AI Code Examples**: Toggle AI-generated code examples
- **Sound System**: Enable/disable audio feedback
- **Tab Indentation**: Use Tab/Shift+Tab for indentation
- **Auto-Scroll**: Code display scrolls automatically
- **Keyboard Shortcuts**: 
  - `Escape`: Stop game
  - `F1`: Start game
  - `Tab`: Add indentation
  - `Shift+Tab`: Remove indentation

## 🏗️ Project Structure

```
play-typing/
├── public/
│   ├── index.html
│   └── sounds/                 # Audio files directory
├── src/
│   ├── components/
│   │   ├── LandingPage.js      # Landing page component
│   │   └── TypingGame.js       # Main game component
│   ├── data/
│   │   └── codeExamples.js     # Code examples database
│   ├── services/
│   │   └── githubService.js    # GitHub API integration
│   ├── utils/
│   │   └── soundUtils.js       # Sound system utilities
│   ├── App.js                  # Main app component
│   ├── App.css                 # Main styles
│   └── index.js                # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── package.json
└── README.md
```

## 🎨 Design Features

### 🎯 UI/UX Highlights
- **Dark Theme**: Modern dark color scheme
- **Glassmorphism**: Frosted glass effects
- **Smooth Animations**: 60fps animations
- **Responsive Grid**: Adaptive layout system
- **Interactive Elements**: Hover and focus states
- **Visual Feedback**: Color-coded typing feedback

### 🎵 Audio System
- **Web Audio API**: Programmatic sound generation
- **Error Feedback**: Audio cues for typing mistakes
- **Toggle Control**: Easy sound on/off switching
- **Error Handling**: Graceful fallback for audio issues

## 🤖 AI Code Examples System

### 🔄 GitHub API Integration
- **Trending Repositories**: Fetches popular code examples
- **Language Filtering**: Code examples by programming language
- **Rate Limit Handling**: Automatic fallback to mock data
- **Caching System**: 24-hour localStorage cache

### 💾 Cache Management
- **Smart Caching**: Automatic cache invalidation
- **Fallback Data**: Mock examples when API fails
- **Status Display**: Cache age and source information
- **Performance**: Fast loading with cached data

## 📊 Performance Metrics

### 🏆 Technical Achievements
- **813 lines** TypingGame.js component
- **437 lines** code examples database
- **380 lines** GitHub API service
- **167 lines** sound system utilities
- **55 lines** App.js (toast integration)
- **8 programming languages** support
- **3 responsive breakpoints**
- **20+ state variables**
- **Custom regex highlighting**
- **AI code analysis system**

## 🚀 Deployment

### 🌐 GitHub Pages
- **Automatic Deployment**: GitHub Actions workflow
- **Custom Domain**: play-typing subdomain
- **HTTPS**: Secure connection
- **CDN**: Fast global delivery

### 🔧 Build Process
```bash
# Development
npm start

# Production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🎯 Future Features

### 🔮 Planned Enhancements
- [ ] **Multiplayer Mode**: Compete with friends
- [ ] **Leaderboards**: Global and local rankings
- [ ] **Custom Code**: Upload your own code examples
- [ ] **Themes**: Multiple color schemes
- [ ] **Statistics**: Detailed performance analytics
- [ ] **Achievements**: Unlockable badges and rewards
- [ ] **Code Snippets**: Save favorite code examples
- [ ] **Export Results**: Download performance reports

## 🤝 Contributing

### 🛠️ Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### 📝 Code Style
- **ESLint**: Follow project linting rules
- **Prettier**: Consistent code formatting
- **Comments**: Document complex logic
- **Testing**: Test new features thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ahmet Uyar**
- GitHub: [@4hmetuyar](https://github.com/4hmetuyar)
- Project: [Play Typing](https://github.com/4hmetuyar/play-typing)

## 🙏 Acknowledgments

- **React Team**: For the amazing framework
- **GitHub**: For the API and hosting
- **Community**: For feedback and suggestions
- **Open Source**: For the tools and libraries used

---

**⭐ If you like this project, please give it a star on GitHub!**

[![GitHub stars](https://img.shields.io/github/stars/4hmetuyar/play-typing?style=social)](https://github.com/4hmetuyar/play-typing)
[![GitHub forks](https://img.shields.io/github/forks/4hmetuyar/play-typing?style=social)](https://github.com/4hmetuyar/play-typing)
[![GitHub watchers](https://img.shields.io/github/watchers/4hmetuyar/play-typing?style=social)](https://github.com/4hmetuyar/play-typing)
