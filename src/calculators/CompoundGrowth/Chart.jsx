import React from 'react';
import { isEmpty } from 'lodash';
import { useTheme, Box } from '@mui/material';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import useIsMobile from '../../hooks/useIsMobile';
import { convertToCurrency } from './utils';

const tooltipFormatter = (value, name) => {
  const customNames = {
    amount: 'Total amount',
    totalContributions: "Total contributions",
  }

  return [convertToCurrency(value), customNames[name]]
}

const Visualization = ({ yearlyReturns }) => {
  const theme = useTheme();
  const finalYear = yearlyReturns[yearlyReturns.length - 1];
  const millionDollarYear = yearlyReturns.find(entry => entry.amount >= 1000000)?.year;

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
      <ResponsiveContainer width="90%" height="90%">
        <AreaChart
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
          <Area
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            fill={theme.palette.primary.main}
          />
          <Area
            type="monotone"
            dataKey="totalContributions"
            activeDot={{ r: 8 }}
          />
          {millionDollarYear && (
            <ReferenceLine
              x={millionDollarYear}
              stroke="red"
              strokeDasharray="3 3"
              label={{
                value: `$1M`,
                position: 'insideTopRight',
                fill: 'red',
                fontSize: 15,
              }}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  )
}

const Chart = ({ yearlyReturns }) => {
  const isMobile = useIsMobile();

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%', 
      borderRadius: isMobile ? '0px 0px 50px 50px' : '0px 50px 50px 0px',
    }}>
      {isEmpty(yearlyReturns) ?
        <Box>
          Fill in some values to get started
        </Box>
        :
        <Visualization yearlyReturns={yearlyReturns} />
      }
    </Box>
  );
}

export default Chart;
