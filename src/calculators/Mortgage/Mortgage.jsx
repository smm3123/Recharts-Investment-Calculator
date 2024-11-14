import React, { useState } from "react";
import { Box } from "@mui/material";
import Inputs from "./Inputs";
import ToolContainer from "../ToolContainer";

import useIsMobile from "../../hooks/useIsMobile";

const Mortgage = () => {
  const [monthlyMortgagePayment, setMonthlyMortgagePayment] = useState(0);
  const isMobile = useIsMobile();
  return (
    <ToolContainer title="Mortgage Calculator">
      <Box
        sx={{
          width: isMobile ? '100%' : '40%',
          height: isMobile ? '50%' : '100%',
        }}
      >
        <Inputs setMonthlyMortgagePayment={setMonthlyMortgagePayment} />
      </Box>
      <Box
        sx={{
          height: isMobile ? '500px' : '80vh',
          width: '100%',
          display: 'flex',
        }}
      >
        {monthlyMortgagePayment}
      </Box>
    </ToolContainer>
  );
}

export default Mortgage;