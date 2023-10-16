// Signup component
/*import React, { useState } from 'react';
import axios from 'axios';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:3000/auth/signup', { username, password }, { withCredentials: true });
      console.log('Signup successful');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
*/
// Signup.tsx
/*import React, { useState } from 'react';
import axios from 'axios';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/signup', { username, password }, { withCredentials: true });
      const { user, token } = response.data;
      console.log('Signup successful', user, token);
      // You can store the token in localStorage or a state management library for future requests
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;*/
// Signup.tsx
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/signup', { username, password });
      const { user, token } = response.data;
      console.log('Signup successful', user, token);
      // You can store the token in localStorage or a state management library for future requests
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <h2 className="myColor">Signup</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleSignup} className="login">Signup</button>
    </div>
  );
};

export default Signup;

