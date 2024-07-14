import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import RedirectIfLogged from './components/RedirectIfLogged';
// import EditCarPage from './pages/EditCarPage';
// import ProtectedRoute from './components/ProtectedRoute';

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
        {/* <Route
          path="/edit/car/:id"
          element={<ProtectedRoute element={<EditCarPage />} />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
