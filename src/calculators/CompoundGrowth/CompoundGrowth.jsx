import React, { useState } from 'react';
import { Box } from '@mui/material';

import Inputs from './Inputs';
import Chart from './Chart';
import Insights from './Insights';
import useIsMobile from "../../hooks/useIsMobile";
import { isEmpty } from 'lodash';

const CompoundGrowth = () => {
  const [yearlyReturns, setYearlyReturns] = useState([]);
  const isMobile = useIsMobile();

  return (
    <Box sx={{ height: '100%' }}>
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
          <Box
            sx={{
              width: isMobile ? '100%' : '40%',
              height: isMobile ? '50%' : '100%',
            }}
          >
            <Inputs setYearlyReturns={setYearlyReturns} />
            {console.log(yearlyReturns)}
            {yearlyReturns.length > 1 && <Insights yearlyReturns={yearlyReturns} />}
          </Box>
          <Box
            sx={{
              height: isMobile ? '500px' : '80vh',
              width: '100%',
              display: 'flex',
            }}
          >
            <Chart yearlyReturns={yearlyReturns} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CompoundGrowth;
