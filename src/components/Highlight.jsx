import React from 'react';
import { Box } from '@mui/material';

const Highlight = ({ children }) => (
  <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
    {children}
  </Box>
);

export default Highlight;