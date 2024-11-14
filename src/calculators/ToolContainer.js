import React from "react";
import { Box, Typography } from "@mui/material";
import useIsMobile from "../hooks/useIsMobile";

const ToolContainer = ({ title, children }) => {
  
  const isMobile = useIsMobile();

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          p: isMobile ? 0 : 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            height: '100%',
            width: '80%',
            borderRadius: '50px',
            border: '2px solid #e0e0e0',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default ToolContainer;