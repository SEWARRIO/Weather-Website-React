

// Login.tsx
/*import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

interface LoginProps {
  onLogin: () => void; // Prop to update isLoggedIn state
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password });
      const { user, token } = response.data;

      localStorage.setItem('loggedInUser', JSON.stringify({ user, token }));
      onLogin();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2 className="myColor">Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleLogin} className="login">Login</button>
    </div>
  );
};

export default Login;

/*
// Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import '../App.css';

interface LoginProps {
  onLogin: () => void; // Prop to update isLoggedIn state
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Use the login function from the AuthContext

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password });
      const { user, token } = response.data;

      // Call the login function from AuthContext to update the authentication status
      login(user, token);
      onLogin();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2 className="myColor">Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleLogin} className="login">Login</button>
    </div>
  );
};

export default Login;
*/


// Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../App.css';

interface LoginProps {
  onLogin: () => void; // Prop to update isLoggedIn state
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password });
      const { user, token } = response.data;

      localStorage.setItem('loggedInUser', JSON.stringify({ user, token }));
      onLogin(); // Call the onLogin prop

      // Optionally, you can use navigate to redirect to the weather page
      navigate('/weather');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2 className="myColor , signup_login">Login</h2>

      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleLogin} className="login">
        Login
      </button>
    </div>
  );
};

export default Login;
