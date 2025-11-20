import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import usersData from './usersData';
import type {User} from './usersData';

type AuthContextType = {
  isAuthenticated: boolean;
  userRole: User['role'] | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userRole: null,
  login: () => false,
  logout: () => {},
});

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<User['role'] | null>(null);

  const login = (username: string, password: string) => {
    const user = usersData.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      setUserRole(user.role);
      window.history.pushState({}, '', '/users');
      window.dispatchEvent(new Event('popstate'));
      return true;
    } else {
      alert('Identifiants invalides');
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    window.history.pushState({}, '', '/login');
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
