import React, { useState } from 'react';
import { Box } from '@mui/material';

import Inputs from './components/Inputs';
import Chart from './components/Chart';
import useIsMobile from './hooks/useIsMobile';

function App() {
  const [yearlyReturns, setYearlyReturns] = useState({});
  const isMobile = useIsMobile();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      p: isMobile ? 0 : 4,
    }}>
      <Box sx={{ fontWeight: "bold", fontSize: '40px', mb: '25px' }}>Investment Calculator</Box>
      <Box sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        height: '100%',
        width: '80%',
        borderRadius: '50px',
        border: '3px',
        borderStyle: 'solid',
      }}>
        <Box sx={{ width: isMobile ? "100%" : "40%", height: isMobile ? "50%" : "100%" }}>
          <Inputs setYearlyReturns={setYearlyReturns} />
        </Box>
        <Box sx={{ height: isMobile ? "500px" : "80vh", width: "100%", display: "flex"}}>
          <Chart yearlyReturns={yearlyReturns} />
        </Box>
      </Box>
    </Box>
  )
}

export default App;
