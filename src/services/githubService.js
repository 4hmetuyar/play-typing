// GitHub API servisi - trending repository'leri ve kod örneklerini getirir

const GITHUB_API_BASE = 'https://api.github.com';
const CACHE_KEY = 'ai_code_examples';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 saat
const TRENDING_REPOS = [
  'facebook/react',
  'vercel/next.js',
  'microsoft/vscode',
  'nodejs/node',
  'python/cpython',
  'microsoft/TypeScript',
  'tensorflow/tensorflow',
  'pytorch/pytorch',
  'vuejs/vue',
  'angular/angular',
  'sveltejs/svelte',
  'denoland/deno',
  'rust-lang/rust',
  'golang/go',
  'microsoft/dotnet'
];

// Cache yönetimi
const getCachedExamples = (language) => {
  try {
    const cached = localStorage.getItem(`${CACHE_KEY}_${language}`);
    if (cached) {
      const data = JSON.parse(cached);
      const now = Date.now();
      if (now - data.timestamp < CACHE_DURATION) {
        return data.examples;
      }
    }
  } catch (error) {
    console.error('Error reading cache:', error);
  }
  return null;
};

const setCachedExamples = (language, examples) => {
  try {
    const data = {
      examples,
      timestamp: Date.now()
    };
    localStorage.setItem(`${CACHE_KEY}_${language}`, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving cache:', error);
  }
};

// Mock data - API limitine takıldığında kullanılacak
const getMockCodeExamples = (language) => {
  const mockExamples = {
    'JavaScript': [
      {
        id: 'mock-js-1',
        language: 'JavaScript',
        title: 'Modern ES6+ Features',
        code: `// Destructuring assignment
const { name, age, city } = user;

// Arrow functions
const add = (a, b) => a + b;

// Template literals
const message = \`Hello \${name}, you are \${age} years old!\`;

// Async/await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`,
        source: 'Mock Data',
        difficulty: 'Orta',
        isAIGenerated: true,
        createdAt: new Date().toISOString()
      }
    ],
    'React': [
      {
        id: 'mock-react-1',
        language: 'React',
        title: 'React Hooks Example',
        code: `import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`,
        source: 'Mock Data',
        difficulty: 'Orta',
        isAIGenerated: true,
        createdAt: new Date().toISOString()
      }
    ],
    'Python': [
      {
        id: 'mock-python-1',
        language: 'Python',
        title: 'Data Processing with Pandas',
        code: `import pandas as pd
import numpy as np

# Create a sample DataFrame
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['New York', 'London', 'Tokyo']
}

df = pd.DataFrame(data)

# Data manipulation
df['age_group'] = df['age'].apply(
    lambda x: 'Young' if x < 30 else 'Adult'
)

# Filter data
adults = df[df['age_group'] == 'Adult']

# Group by city
city_stats = df.groupby('city').agg({
    'age': ['mean', 'count']
}).round(2)

print(city_stats)`,
        source: 'Mock Data',
        difficulty: 'Orta',
        isAIGenerated: true,
        createdAt: new Date().toISOString()
      }
    ]
  };

  return mockExamples[language] || mockExamples['JavaScript'];
};

// GitHub API'den repository bilgilerini getir
export const fetchRepositoryInfo = async (repo) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${repo}`);
    if (!response.ok) throw new Error('Repository not found');
    return await response.json();
  } catch (error) {
    console.error('Error fetching repository:', error);
    return null;
  }
};

// Repository'den dosya içeriğini getir
export const fetchFileContent = async (repo, path) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/contents/${path}`);
    if (!response.ok) throw new Error('File not found');
    const data = await response.json();
    
    // Base64 decode
    if (data.content) {
      return atob(data.content);
    }
    return null;
  } catch (error) {
    console.error('Error fetching file content:', error);
    return null;
  }
};

// Repository'den örnek dosyaları bul
export const findExampleFiles = async (repo) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/contents`);
    if (!response.ok) throw new Error('Repository contents not accessible');
    const files = await response.json();
    
    // Örnek dosyaları filtrele
    const exampleFiles = files.filter(file => 
      file.type === 'file' && 
      (file.name.includes('example') || 
       file.name.includes('demo') || 
       file.name.includes('sample') ||
       file.name.endsWith('.js') ||
       file.name.endsWith('.ts') ||
       file.name.endsWith('.jsx') ||
       file.name.endsWith('.tsx') ||
       file.name.endsWith('.py') ||
       file.name.endsWith('.java') ||
       file.name.endsWith('.cs') ||
       file.name.endsWith('.go') ||
       file.name.endsWith('.rs'))
    );
    
    return exampleFiles.slice(0, 5); // İlk 5 dosyayı al
  } catch (error) {
    console.error('Error finding example files:', error);
    return [];
  }
};

// AI benzeri kod analizi (basit pattern matching)
export const analyzeCodePattern = (code, language) => {
  const patterns = {
    'React': {
      hooks: (code.match(/use[A-Z]\w+/g) || []).length,
      components: (code.match(/function\s+\w+|const\s+\w+\s*=\s*\(/g) || []).length,
      jsx: (code.match(/<[A-Z]\w+/g) || []).length,
      complexity: code.length / 1000
    },
    'JavaScript': {
      functions: (code.match(/function\s+\w+|const\s+\w+\s*=\s*\(/g) || []).length,
      classes: (code.match(/class\s+\w+/g) || []).length,
      async: (code.match(/async|await|Promise/g) || []).length,
      complexity: code.length / 1000
    },
    'Python': {
      functions: (code.match(/def\s+\w+/g) || []).length,
      classes: (code.match(/class\s+\w+/g) || []).length,
      imports: (code.match(/import\s+\w+/g) || []).length,
      complexity: code.length / 1000
    },
    'TypeScript': {
      interfaces: (code.match(/interface\s+\w+/g) || []).length,
      types: (code.match(/type\s+\w+/g) || []).length,
      generics: (code.match(/<[A-Z]\w*>/g) || []).length,
      complexity: code.length / 1000
    }
  };
  
  return patterns[language] || { complexity: code.length / 1000 };
};

// Güncel kod örnekleri getir
export const fetchTrendingCodeExamples = async (language = 'all', limit = 5) => {
  try {
    // Önce cache'den kontrol et
    const cacheKey = language === 'all' ? 'all' : language;
    const cachedExamples = getCachedExamples(cacheKey);
    
    if (cachedExamples && cachedExamples.length > 0) {
      console.log('Using cached examples for', language);
      return cachedExamples.slice(0, limit);
    }

    console.log('Fetching fresh examples from GitHub API...');
    const examples = [];
    
    // Rastgele repository'ler seç
    const shuffledRepos = TRENDING_REPOS.sort(() => 0.5 - Math.random());
    const selectedRepos = shuffledRepos.slice(0, 3);
    
    for (const repo of selectedRepos) {
      try {
        const files = await findExampleFiles(repo);
        
        for (const file of files.slice(0, 2)) {
          const content = await fetchFileContent(repo, file.path);
          
          if (content && content.length > 100 && content.length < 2000) {
            const fileExtension = file.name.split('.').pop();
            const detectedLanguage = getLanguageFromExtension(fileExtension);
            
            if (language === 'all' || detectedLanguage === language) {
              const analysis = analyzeCodePattern(content, detectedLanguage);
              
              examples.push({
                id: `${repo}-${file.name}-${Date.now()}`,
                language: detectedLanguage,
                title: `${file.name} - ${repo}`,
                code: content,
                source: `GitHub: ${repo}`,
                difficulty: getDifficultyLevel(analysis.complexity),
                patterns: analysis,
                isAIGenerated: true,
                createdAt: new Date().toISOString()
              });
            }
          }
        }
      } catch (repoError) {
        console.warn(`Error processing repo ${repo}:`, repoError);
        continue; // Bir repo hata verirse diğerlerine devam et
      }
    }
    
    // Eğer API'den örnek gelmediyse mock data kullan
    if (examples.length === 0) {
      console.log('No examples from API, using mock data');
      const mockExamples = getMockCodeExamples(language);
      setCachedExamples(cacheKey, mockExamples);
      return mockExamples.slice(0, limit);
    }
    
    // Cache'e kaydet
    setCachedExamples(cacheKey, examples);
    return examples.slice(0, limit);
    
  } catch (error) {
    console.error('Error fetching trending code examples:', error);
    
    // Hata durumunda mock data kullan
    console.log('API error, falling back to mock data');
    const mockExamples = getMockCodeExamples(language);
    return mockExamples.slice(0, limit);
  }
};

// Dosya uzantısından dil belirle
const getLanguageFromExtension = (extension) => {
  const languageMap = {
    'js': 'JavaScript',
    'jsx': 'React',
    'ts': 'TypeScript',
    'tsx': 'React',
    'py': 'Python',
    'java': 'Java',
    'cs': 'C#',
    'go': 'Go',
    'rs': 'Rust',
    'cpp': 'C++',
    'c': 'C',
    'php': 'PHP',
    'rb': 'Ruby',
    'swift': 'Swift',
    'kt': 'Kotlin'
  };
  
  return languageMap[extension] || 'JavaScript';
};

// Zorluk seviyesi belirle
const getDifficultyLevel = (complexity) => {
  if (complexity < 0.5) return 'Başlangıç';
  if (complexity < 1.5) return 'Orta';
  if (complexity < 3) return 'İleri';
  return 'Uzman';
};

// Belirli bir dil için örnek getir
export const fetchCodeExamplesByLanguage = async (language) => {
  return await fetchTrendingCodeExamples(language, 10);
};

// Rastgele örnek getir
export const fetchRandomCodeExample = async () => {
  const examples = await fetchTrendingCodeExamples('all', 1);
  return examples[0] || null;
};
