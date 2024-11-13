import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";

const Tool = ({
  title,
  description,
  link,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        textAlign: "center",
        borderRadius: "5px",
        border: `2px solid ${theme.palette.primary.main}`,
        p: 4,
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
        },
        cursor: "pointer",
      }}
      onClick={() => {
        window.location.href = link;
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
    </Box>
  );
};

const InvestmentTools = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Investment Tools
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        <Tool
          title="Compound Growth Calculator"
          description="Calculate the future value of an investment with compound interest."
          link="/tools/compound-growth"
        />
      </Box>
    </Box>
  );
}

const MortgageTools = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Mortgage Tools
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        <Tool
          title="Mortgage Calculator"
          description="Calculate your monthly mortgage payments."
          link="/tools/mortgage"
        />
      </Box>
    </Box>
  );
}

const Tools = () => {
  return (
    <Box
      id="tools"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        px: 6
      }}>
      <InvestmentTools />
      <MortgageTools />
    </Box>
  );
}

export default Tools;