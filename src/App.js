import React, { useState } from 'react';
import Login from './logIn';
import Home from './Home';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Home />}
    </div>
  );
};

export default App;
