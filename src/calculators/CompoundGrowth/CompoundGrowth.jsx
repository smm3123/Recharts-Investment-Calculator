import React, { useState } from 'react';
import { Box } from '@mui/material';

import Inputs from './Inputs';
import Chart from './Chart';
import Insights from './Insights';

import ToolContainer from '../ToolContainer';

import useIsMobile from "../../hooks/useIsMobile";

const CompoundGrowth = () => {
  const [yearlyReturns, setYearlyReturns] = useState([]);
  const isMobile = useIsMobile();

  return (
    <ToolContainer title="Compound Growth Calculator">
      <Box
        sx={{
          width: isMobile ? '100%' : '40%',
          height: isMobile ? '50%' : '100%',
        }}
      >
        <Inputs setYearlyReturns={setYearlyReturns} />
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
    </ToolContainer>
  );
}

export default CompoundGrowth;
