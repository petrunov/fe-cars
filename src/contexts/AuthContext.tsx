import {
  createContext,
  useState,
  useMemo,
  ReactNode,
  useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../interfaces/User';
import {
  removeAuthenticatedUser,
  removeToken,
  setAuthenticatedUser,
  setToken,
  getAuthenticatedUser,
} from '../utils/tokenUtils';

export interface AuthContextProps {
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  user: User | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => getAuthenticatedUser());
  const navigate = useNavigate();

  function login(userdata: User, token: string) {
    setUser(userdata);
    setToken(token);
    setAuthenticatedUser(userdata);
  }

  const logout = useCallback(() => {
    setUser(null);
    removeToken();
    removeAuthenticatedUser();
    navigate('/');
  }, [navigate]);

  const value = useMemo(
    () => ({
      isAuthenticated: !!user,
      login,
      logout,
      user,
    }),
    [user, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
