export const codeExamples = [
  {
    id: 1,
    language: 'JavaScript',
    title: 'Array Methods',
    code: `const numbers = [1, 2, 3, 4, 5];

// Map ile her sayıyı 2 ile çarp
const doubled = numbers.map(num => num * 2);

// Filter ile çift sayıları filtrele
const evens = numbers.filter(num => num % 2 === 0);

// Reduce ile toplam hesapla
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log('Doubled:', doubled);
console.log('Evens:', evens);
console.log('Sum:', sum);`
  },
  {
    id: 2,
    language: 'React',
    title: 'Functional Component',
    code: `import React, { useState, useEffect } from 'react';

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;`
  },
  {
    id: 3,
    language: 'Python',
    title: 'List Comprehension',
    code: `# Kareler listesi oluştur
squares = [x**2 for x in range(10)]

# Çift sayıların kareleri
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Sözlük comprehension
word_lengths = {word: len(word) for word in ['hello', 'world', 'python']}

# İç içe list comprehension
matrix = [[i + j for j in range(3)] for i in range(3)]

print("Squares:", squares)
print("Even squares:", even_squares)
print("Word lengths:", word_lengths)
print("Matrix:", matrix)`
  },
  {
    id: 4,
    language: 'CSS',
    title: 'Flexbox Layout',
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #1a252f;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #4f46e5;
  color: white;
}

.btn-primary:hover {
  background: #4338ca;
  transform: translateY(-2px);
}`
  },
  {
    id: 5,
    language: 'JavaScript',
    title: 'Async/Await',
    code: `// API'den veri çekme fonksiyonu
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// Birden fazla API çağrısı
async function fetchMultipleUsers(userIds) {
  const promises = userIds.map(id => fetchUserData(id));
  const results = await Promise.allSettled(promises);
  
  return results.map((result, index) => ({
    userId: userIds[index],
    data: result.status === 'fulfilled' ? result.value : null,
    error: result.status === 'rejected' ? result.reason : null
  }));
}

// Kullanım
fetchMultipleUsers([1, 2, 3, 4])
  .then(users => console.log('Users:', users))
  .catch(error => console.error('Error:', error));`
  },
  {
    id: 6,
    language: 'React',
    title: 'Custom Hook',
    code: `import { useState, useEffect } from 'react';

// Custom hook: localStorage ile state yönetimi
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  return [storedValue, setValue];
}

// Kullanım
const MyComponent = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
};`
  },
  {
    id: 7,
    language: 'C#',
    title: 'Class and Properties',
    code: `using System;
using System.Collections.Generic;

public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Email { get; set; }
    
    public Person(string name, int age, string email)
    {
        Name = name;
        Age = age;
        Email = email;
    }
    
    public virtual void DisplayInfo()
    {
        Console.WriteLine($"Name: {Name}, Age: {Age}, Email: {Email}");
    }
}

public class Student : Person
{
    public string StudentId { get; set; }
    public List<string> Courses { get; set; }
    
    public Student(string name, int age, string email, string studentId) 
        : base(name, age, email)
    {
        StudentId = studentId;
        Courses = new List<string>();
    }
    
    public override void DisplayInfo()
    {
        base.DisplayInfo();
        Console.WriteLine($"Student ID: {StudentId}");
    }
    
    public void AddCourse(string courseName)
    {
        Courses.Add(courseName);
    }
}`
  },
  {
    id: 8,
    language: 'C#',
    title: 'LINQ Queries',
    code: `using System;
using System.Linq;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        
        // Even numbers
        var evenNumbers = numbers.Where(n => n % 2 == 0).ToList();
        
        // Numbers greater than 5
        var greaterThanFive = numbers.Where(n => n > 5).ToList();
        
        // Sum of all numbers
        var sum = numbers.Sum();
        
        // Average
        var average = numbers.Average();
        
        // Group by even/odd
        var grouped = numbers.GroupBy(n => n % 2 == 0 ? "Even" : "Odd")
                            .ToDictionary(g => g.Key, g => g.ToList());
        
        Console.WriteLine($"Even numbers: {string.Join(", ", evenNumbers)}");
        Console.WriteLine($"Sum: {sum}, Average: {average}");
        
        foreach (var group in grouped)
        {
            Console.WriteLine($"{group.Key}: {string.Join(", ", group.Value)}");
        }
    }
}`
  },
  {
    id: 9,
    language: 'TypeScript',
    title: 'Interface and Generics',
    code: `interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

class UserService {
  private users: User[] = [];
  
  addUser(user: User): void {
    this.users.push(user);
  }
  
  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
  
  getAllUsers(): User[] {
    return [...this.users];
  }
  
  async fetchUser(id: number): Promise<ApiResponse<User>> {
    try {
      const response = await fetch(\`/api/users/\${id}\`);
      const data = await response.json();
      
      return {
        data,
        status: response.status,
        message: 'Success'
      };
    } catch (error) {
      return {
        data: {} as User,
        status: 500,
        message: 'Error fetching user'
      };
    }
  }
}

// Usage
const userService = new UserService();
userService.addUser({
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  isActive: true
});`
  },
  {
    id: 10,
    language: 'Vue.js',
    title: 'Composition API',
    code: `<template>
  <div class="counter">
    <h2>Count: {{ count }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
    
    <div class="history">
      <h3>History:</h3>
      <ul>
        <li v-for="(item, index) in history" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const count = ref(0)
const history = ref([])

const increment = () => {
  count.value++
  history.value.push(\`Incremented to \${count.value}\`)
}

const decrement = () => {
  count.value--
  history.value.push(\`Decremented to \${count.value}\`)
}

const reset = () => {
  count.value = 0
  history.value.push('Reset to 0')
}

// Computed property
const doubleCount = computed(() => count.value * 2)

// Watcher
watch(count, (newValue, oldValue) => {
  console.log(\`Count changed from \${oldValue} to \${newValue}\`)
})
</script>

<style scoped>
.counter {
  text-align: center;
  padding: 2rem;
}

button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.history {
  margin-top: 2rem;
  text-align: left;
}
</style>`
  }
];

// Rastgele kod örneği seçme fonksiyonu
export const getRandomCodeExample = () => {
  const randomIndex = Math.floor(Math.random() * codeExamples.length);
  return codeExamples[randomIndex];
};
