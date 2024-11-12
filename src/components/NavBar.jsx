import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" component="div">
          Investment Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
