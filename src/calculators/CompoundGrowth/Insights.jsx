import React from 'react';
import { isEmpty } from 'lodash';
import { Box, Typography, useTheme } from '@mui/material';
import { convertToCurrency } from './utils';
import Highlight from '../../components/Highlight';

const Insights = ({ yearlyReturns }) => {
  const theme = useTheme();
  const finalYear = yearlyReturns[yearlyReturns.length - 1];
  const millionDollarYear = yearlyReturns.find(entry => entry.amount >= 1000000)?.year;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 4,
        gap: 3,
      }}
    >
      {/* <Box sx={{ fontWeight: "bold", fontSize: '20px', mb: '20px' }}>
        {`You will have ${convertToCurrency(finalYear.amount)} by ${finalYear.year}`}
      </Box> */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        You will have <Highlight>{convertToCurrency(finalYear.amount)}</Highlight> by {finalYear.year}
      </Typography>
      {millionDollarYear && (
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {/* `$1M in ${millionDollarYear - yearlyReturns[0].year} years (${millionDollarYear})`, */}
          You will reach <Highlight>$1M</Highlight> in {millionDollarYear - yearlyReturns[0].year} years ({millionDollarYear})
        </Typography>
      )}
    </Box>
  );
}

export default Insights;