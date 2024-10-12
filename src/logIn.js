import React, { useState } from 'react';
import styles from './logIn.module.css';

const users = [
  { username: 'john', password: '123456' },
  { username: 'mary', password: '456' }
];

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setError(''); 
      onLogin(); 
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        {error && <div className={styles.errorModal}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;