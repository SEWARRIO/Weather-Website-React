// AuthContext.tsx
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  isLoggedIn: boolean;
  login: (user: any, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const { token } = JSON.parse(storedUser);
      console.log('User is already logged in with token:', token);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (user: any, token: string) => {
    setIsLoggedIn(true);
    localStorage.setItem('loggedInUser', JSON.stringify({ user, token }));
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
