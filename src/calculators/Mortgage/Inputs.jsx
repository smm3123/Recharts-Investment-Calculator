import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import useIsMobile from '../../hooks/useIsMobile';

const calculateMonthlyMortgagePayment = (
  homePrice,
  downPayment,
  loanTerm,
  annualInterestRate,
) => {
  /*
  The formula is

  M = P( ( i(1+i)^n ) / ( ((1 + i)^n) - 1) )

  Where:
    M is your monthly payment.
    P is the principal loan amount.
    i is your monthly interest rate. Your lender likely lists interest rates as an annual figure, so you’ll need to divide by 12, for each month of the year. So, if your rate is 5%, then the monthly rate will look like this: 0.05/12 = 0.004167.
    n is number of months

  */
  const P = homePrice - downPayment;
  const i = annualInterestRate / 12 / 100;
  const n = loanTerm * 12;

  // Handle cases where i is 0 to avoid division by zero
  if (i === 0) {
    return P / n;
  }

  const monthlyPayment = P * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

  return monthlyPayment;
};

const Inputs = ({ setMonthlyMortgagePayment }) => {
  const [homePrice, setHomePrice] = useState("0");
  const [downPayment, setDownPayment] = useState("0");
  const [loanTerm, setLoanTerm] = useState("0");
  const [interestRate, setInterestRate] = useState("0");
  const [propertyTax, setPropertyTax] = useState("0");
  const [homeInsurance, setHomeInsurance] = useState("0");
  const [hoa, setHoa] = useState("0");

  const isMobile = useIsMobile();

  useEffect(() => {
    // Helper function to safely parse numbers, defaulting to 0
    const safeParse = (value, isFloat = false) => {
      const parsed = isFloat ? parseFloat(value) : parseInt(value, 10);
      return isNaN(parsed) ? 0 : parsed;
    };

    const parsedHomePrice = safeParse(homePrice);
    const parsedDownPayment = safeParse(downPayment);
    const parsedLoanTerm = safeParse(loanTerm);
    const parsedInterestRate = safeParse(interestRate, true);
    const parsedPropertyTax = safeParse(propertyTax);
    const parsedHomeInsurance = safeParse(homeInsurance);
    const parsedHoa = safeParse(hoa);

    const mortgage = calculateMonthlyMortgagePayment(
      parsedHomePrice,
      parsedDownPayment,
      parsedLoanTerm,
      parsedInterestRate,
    );

    const totalPayment = mortgage 
      + (parsedPropertyTax / 12) 
      + (parsedHomeInsurance / 12) 
      + parsedHoa;

    setMonthlyMortgagePayment(totalPayment.toFixed(2));
  }, [
    homePrice,
    downPayment,
    loanTerm,
    interestRate,
    propertyTax,
    homeInsurance,
    hoa,
    setMonthlyMortgagePayment,
  ]);

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
    >
      <Box sx={{ fontWeight: "bold", fontSize: '25px' }}>Enter your information:</Box>
      <TextField
        label="Home Price ($)"
        variant="filled"
        value={homePrice}
        onChange={(e) => setHomePrice(e.target.value)}
      />
      <TextField
        label="Down Payment ($)"
        variant="filled"
        value={downPayment}
        onChange={(e) => setDownPayment(e.target.value)}
      />
      <TextField
        label="Loan Term (years)"
        variant="filled"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
      />
      <TextField
        label="Interest Rate (%)"
        variant="filled"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <TextField
        label="Property Tax / year ($)"
        variant="filled"
        value={propertyTax}
        onChange={(e) => setPropertyTax(e.target.value)}
      />
      <TextField
        label="Home Insurance / year ($)"
        variant="filled"
        value={homeInsurance}
        onChange={(e) => setHomeInsurance(e.target.value)}
      />
      <TextField
        label="HOA ($)"
        variant="filled"
        value={hoa}
        onChange={(e) => setHoa(e.target.value)}
      />
    </Box>
  )
};

export default Inputs;
