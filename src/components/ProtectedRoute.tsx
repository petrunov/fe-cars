import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/tokenUtils';

interface ProtectedRouteProps {
  element: JSX.Element;
}

function ProtectedRoute({ element }: ProtectedRouteProps) {
  return isLoggedIn() ? element : <Navigate to="/signin" />;
}

export default ProtectedRoute;
