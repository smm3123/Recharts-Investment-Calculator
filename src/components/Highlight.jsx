import React from 'react';
import { Box } from '@mui/material';

const Highlight = ({ color = "primary.main", children }) => (
  <Box component="span" sx={{ color, fontWeight: 'bold' }}>
    {children}
  </Box>
);

export default Highlight;