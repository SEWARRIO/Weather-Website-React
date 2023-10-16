/*import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Weather from '../components/Weather';
import '../App.css';

const AppRouter: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate actual login logic
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulate actual logout logic
    setLoggedIn(false);
  };

  return (
    <Router>
     
      <nav className="navigate">
        <div style={{ marginTop: '55px'}}>
          <div className="weather">
        <p >WeatherApp</p>
        </div>
          <Link to="/signup"><button>Signup</button></Link>
          <Link to="/login"><button>Login</button></Link>
          {isLoggedIn && <Link to="/weather"><button>Weather</button></Link>}
         
        </div>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/weather"
          element={isLoggedIn ? <Weather /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
*/
// AppRouter.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Weather from '../components/Weather';
import '../App.css';


const AppRouter: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate actual login logic
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulate actual logout logic
    setLoggedIn(false);
  };

  return (
    <Router>
      <nav className="navigate">
        <div>
          <div className="weather">
            <p>WeatherApp</p>
          </div>
          <Link to="/signup"><button>Signup</button></Link>
          <Link to="/login"><button>Login</button></Link>
          {isLoggedIn && <Link to="/weather"><button>Weather</button></Link>}
        </div>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/weather"
          element={isLoggedIn ? <Weather /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;


