import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        mb: 4,
        boxShadow: "none",
        backgroundColor: "white",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">
            Investment Calculator
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Typography variant="body1">
              Tools
            </Typography>
            <Typography variant="body1">
              About
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
