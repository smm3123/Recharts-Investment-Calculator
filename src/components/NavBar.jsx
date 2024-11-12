import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useTheme } from "@mui/material";

const NavButton = ({ link, children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        cursor: "pointer",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 0,
          height: "2px",
          backgroundColor: theme.palette.primary.main,
          transition: "width 0.25s ease",
        },
        "&:hover::after": {
          width: "100%",
        },
      }}
      onClick={() => {
        window.location.href = link;
      }}
    >
      {children}
    </Box>
  );
};

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
            alignItems: "center",
          }}
        >
          <NavButton link="/">
            <Typography variant="h6">
              HorizonWallet
            </Typography>
          </NavButton>
          <Box
            sx={{
              display: "flex",
              gap: 4,
            }}
          >
            <NavButton link="/compound-growth">
              <Typography variant="body1">
                Tools
              </Typography>
            </NavButton>
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
