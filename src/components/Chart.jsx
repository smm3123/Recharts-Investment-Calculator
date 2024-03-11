import React from 'react';
import { isEmpty } from 'lodash';
import { Box } from '@mui/material';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const convertToCurrency = (value) => {
  const options = { style: 'currency', currency: 'USD' };
  return value.toLocaleString('en-US', options);
}

const tooltipFormatter = (value, name) => {
  const customNames = {
    amount: 'Total amount',
    totalContributions: "Total contributions",
  }

  return [convertToCurrency(value), customNames[name]]
}

const EmptyState = () => <Box>Fill in some values to get started</Box>;

const Visualization = ({ yearlyReturns }) => {
  const finalYear = yearlyReturns[yearlyReturns.length - 1];
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Box sx={{ fontWeight: "bold", fontSize: '20px', mb: '20px' }}>
        {`You will have ${convertToCurrency(finalYear.amount)} by ${finalYear.year}`}
      </Box>
      <ResponsiveContainer width="90%" height="90%">
        <LineChart
          width={800}
          height={600}
          data={yearlyReturns}
          margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={tooltipFormatter} />
          <Line type="monotone" dataKey="amount" stroke="#4841cc" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="totalContributions" stroke="#9c2624" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}

const Chart = ({ yearlyReturns }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '70%', 
      backgroundColor: '#e4eaf5',
      borderRadius: '0px 50px 50px 0px',
    }}>
      {isEmpty(yearlyReturns) ?
        <EmptyState /> :
        <Visualization yearlyReturns={yearlyReturns} />
      }
    </Box>
  );
}

export default Chart;