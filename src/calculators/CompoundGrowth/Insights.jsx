import React from 'react';
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
      {!isNaN(finalYear.amount) && (
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          You will have <Highlight>{convertToCurrency(finalYear.amount)}</Highlight> by {finalYear.year}
        </Typography>
      )}
      {millionDollarYear && (
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          You will reach <Highlight>$1M</Highlight> in {millionDollarYear - yearlyReturns[0].year} years ({millionDollarYear})
        </Typography>
      )}
    </Box>
  );
}

export default Insights;