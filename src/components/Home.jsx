import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Highlight from './Highlight';
import Tools from './Tools';

const Home = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          px: 6,
          py: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Horizon<Highlight>Wallet</Highlight>
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          See Beyond <Highlight>Today</Highlight>, Plan for <Highlight>Tomorrow</Highlight>
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ maxWidth: '600px' }}>
          Empower yourself with financial insight. HorizonWallet offers simple, powerful tools to help you make informed decisions about your finances and investments, paving the way to a brighter future.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: '1rem',
            py: 1,
            px: 4,
          }}
          onClick={() => {
            window.location.href = '#tools';
          }}
        >
          View tools
        </Button>
      </Box>
      <Tools />
    </React.Fragment>
  );
};

export default Home;
