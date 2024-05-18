// src/App.tsx
import React, { useEffect, useState } from 'react';
import './styles.css';

const App: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    // 백엔드 API 호출
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React application with custom CSS styling.</p>
      <h2>Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            Name: {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
