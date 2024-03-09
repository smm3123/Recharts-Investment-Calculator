import React, { useState } from 'react';
import { Box } from '@mui/material';

import Inputs from './components/Inputs';
import Chart from './components/Chart';

function App() {
  const [yearlyReturns, setYearlyReturns] = useState({});

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Box sx={{
        display: 'flex',
        height: '800px',
        width: '1500px',
        borderRadius: '50px',
        border: '3px',
        borderStyle: 'solid',
      }}>
        <Inputs setYearlyReturns={setYearlyReturns} />
        <Chart yearlyReturns={yearlyReturns} />
      </Box>
    </Box>
  )
}

export default App;
