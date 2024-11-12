import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useTheme } from "@mui/material";

const NavButton = ({ link, children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        cursor: "pointer",
        paddingBottom: "2px", // Adjust padding to account for the border
        "&:hover": {
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          paddingBottom: 0, // Remove padding when the border appears
        },
      }}
      onClick={() => {
        window.location.href = link;
      }}
    >
      {children}
    </Box>
  )
}

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
