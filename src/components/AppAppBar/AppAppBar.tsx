import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function AppAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 'none',
        bgcolor: 'transparent',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'flex-end', // Align items to the right
          alignItems: 'center',
          bgcolor: 'lightyellow',
          backdropFilter: 'blur(24px)',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
        }}
      >
        <Box>
          <Button
            color="primary"
            variant="text"
            size="small"
            component="a"
            href="/signin"
          >
            Sign in
          </Button>
          <Button
            color="primary"
            variant="contained"
            size="small"
            component="a"
            href="/signup"
            sx={{ ml: 1 }} // Optional: Add margin between buttons
          >
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppAppBar;
