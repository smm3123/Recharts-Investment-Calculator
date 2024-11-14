import React, { useState } from "react";
import { Box } from "@mui/material";
import Inputs from "./Inputs";
import ToolContainer from "../ToolContainer";

import useIsMobile from "../../hooks/useIsMobile";
import Chart from "./Chart";
import { safeParse } from "../utils";
import Insights from "./Insights";

const Mortgage = () => {
  const [monthlyMortgagePayment, setMonthlyMortgagePayment] = useState(0);
  const [propertyTax, setPropertyTax] = useState("0");
  const [homeInsurance, setHomeInsurance] = useState("0");
  const [hoa, setHoa] = useState("0");

  const isMobile = useIsMobile();
  return (
    <ToolContainer title="Mortgage Calculator">
      <Box
        sx={{
          width: isMobile ? "100%" : '60%',
          height: isMobile ? '50%' : '100%',
        }}
      >
        <Inputs
          setMonthlyMortgagePayment={setMonthlyMortgagePayment}
          setPropertyTax={setPropertyTax}
          setHomeInsurance={setHomeInsurance}
          setHoa={setHoa}
          propertyTax={propertyTax}
          homeInsurance={homeInsurance}
          hoa={hoa}
        />
      </Box>
      <Box
        sx={{
          height: isMobile ? '500px' : '50vh',
          width: '100%',
        }}
      >
        <Chart
          monthlyMortgagePayment={monthlyMortgagePayment}
          propertyTax={propertyTax}
          homeInsurance={homeInsurance}
          hoa={hoa}
        />
      </Box>
      
      <Box>
        <Insights
          monthlyMortgagePayment={safeParse(monthlyMortgagePayment, true)}
          propertyTax={safeParse(propertyTax, true)}
          homeInsurance={safeParse(homeInsurance, true)}
          hoa={safeParse(hoa, true)}
        />
      </Box>
    </ToolContainer>
  );
}

export default Mortgage;