import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { AuthContextProps } from '../interfaces/AuthContextProps';

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default useAuth;
