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
        backgroundColor: theme.palette.primary.light,
        borderRadius: "5px",
        p: 4,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
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
      <Tool
        title="Compound Growth Calculator"
        description="Calculate the future value of an investment with compound interest."
        link="/tools/compound-growth"
        image="https://via.placeholder.com/200"
      />
    </Box>
  );
}

const Tools = () => {
  return (
    <Box sx={{ px: 6}}>
      <InvestmentTools />
    </Box>
  );
}

export default Tools;