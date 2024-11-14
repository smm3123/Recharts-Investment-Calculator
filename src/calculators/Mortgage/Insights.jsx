import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { convertToCurrency, getColors, safeParse } from "../utils";
import Highlight from '../../components/Highlight';

const Insights = ({
  monthlyMortgagePayment,
  propertyTax,
  homeInsurance,
  hoa,
}) => {
  const theme = useTheme();
  const colors = getColors(theme);
  
  const totalPayment = safeParse(monthlyMortgagePayment) + safeParse(propertyTax) + safeParse(homeInsurance) + safeParse(hoa);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 4,
        gap: 3,
      }}
    >
      <Typography>
        Your total monthly payment is {convertToCurrency(totalPayment)}
      </Typography>
      <Typography>
        Principal & Interest: <Highlight color={colors[0]}>{convertToCurrency(monthlyMortgagePayment)}</Highlight> ({((safeParse(monthlyMortgagePayment) / totalPayment) * 100).toFixed(2)}%)
      </Typography>
      <Typography>
        Property Tax: <Highlight color={colors[1]}>{convertToCurrency(propertyTax)}</Highlight> ({((safeParse(propertyTax) / totalPayment) * 100).toFixed(2)}%)
      </Typography>
      <Typography>
        Home Insurance: <Highlight color={colors[2]}>{convertToCurrency(homeInsurance)}</Highlight> ({((safeParse(homeInsurance) / totalPayment) * 100).toFixed(2)}%)
      </Typography>
      <Typography>
        HOA: <Highlight color={colors[3]}>{convertToCurrency(hoa)}</Highlight> ({((safeParse(hoa) / totalPayment) * 100).toFixed(2)}%)
      </Typography>
    </Box>
  );
}

export default Insights;