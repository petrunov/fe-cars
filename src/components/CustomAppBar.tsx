import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  isLoggedIn,
  removeAuthenticatedUser,
  removeToken,
} from '../utils/tokenUtils';

function CustomAppBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    removeAuthenticatedUser();
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          Car Dashboard
        </Typography>
        {!isLoggedIn() ? (
          <>
            <Button color="inherit" onClick={() => navigate('/signin')}>
              Sign In
            </Button>
            <Button color="inherit" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
