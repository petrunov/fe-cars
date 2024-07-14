import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/tokenUtils';

interface RedirectIfLoggedProps {
  element: JSX.Element;
}

function RedirectIfLogged({ element }: RedirectIfLoggedProps) {
  return isLoggedIn() ? <Navigate to="/" /> : element;
}

export default RedirectIfLogged;
