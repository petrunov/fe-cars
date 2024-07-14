import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import CarPage from './pages/CarPage';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectIfLogged from './components/RedirectIfLogged';

<Route path="/cars/edit/:id" element={<CarPage />} />;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={<RedirectIfLogged element={<SignUpPage />} />}
        />
        <Route
          path="/signin"
          element={<RedirectIfLogged element={<SignInPage />} />}
        />
        <Route path="/new" element={<ProtectedRoute element={<CarPage />} />} />
        <Route
          path="/edit/:id"
          element={<ProtectedRoute element={<CarPage />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
