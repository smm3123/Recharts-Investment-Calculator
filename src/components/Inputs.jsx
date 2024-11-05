import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import useIsMobile from '../hooks/useIsMobile';

const calculateReturnPerYear = (
  startingAmount,
  monthlyContribution,
  years,
  rateOfReturn,
) => {
  const monthlyRate = rateOfReturn / 100 / 12; // Convert annual rate to monthly
  const startYear = new Date().getFullYear();
  let currentAmount = startingAmount;
  let totalContributions = startingAmount;
  const results = [{ year: startYear, amount: currentAmount, totalContributions }];

  for (let year = 1; year <= years; year++) {
      // Calculate monthly contributions for one year
      for (let month = 1; month <= 12; month++) {
          currentAmount = currentAmount * (1 + monthlyRate) + monthlyContribution;
      }
      
      currentAmount = parseFloat(currentAmount.toFixed(2));
      totalContributions += (monthlyContribution * 12);
      
      results.push({ year: startYear + year, amount: currentAmount, totalContributions });
  }

  return results;
}

const Inputs = ({ setYearlyReturns }) => {
  const [startingAmount, setStartingAmount] = useState("0");
  const [monthlyContribution, setMonthlyContribution] = useState("0");
  const [years, setYears] = useState("0");
  const [rateOfReturn, setRateOfReturn] = useState("7");

  const isMobile = useIsMobile();

  const onSubmit = () => {
    setYearlyReturns(
      calculateReturnPerYear(
        parseInt(startingAmount),
        parseInt(monthlyContribution),
        parseInt(years),
        parseInt(rateOfReturn),
      )
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: isMobile ? '50px' : '50px 0px 0px 50px',
        gap: '50px',
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onSubmit();
        }
      }}
    >
      <Box sx={{ fontWeight: "bold", fontSize: '25px' }}>Enter your information:</Box>
      <TextField
        label="Starting amount"
        variant="filled"
        onChange={(e) => setStartingAmount(e.target.value)}
      />
      <TextField
        label="Monthly contribution"
        variant="filled"
        onChange={(e) => setMonthlyContribution(e.target.value)}
      />
      <TextField
        label="How many years?"
        variant="filled"
        onChange={(e) => setYears(e.target.value)}
      />
      <TextField
        label="Expected rate of return"
        variant="filled"
        onChange={(e) => setRateOfReturn(e.target.value)}
      />
      <Button variant="contained" onClick={onSubmit}>Calculate</Button>
    </Box>
  );
}

export default Inputs;