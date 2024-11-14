import React, { useState } from 'react';
import { useTheme, Box } from '@mui/material';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import useIsMobile from '../../hooks/useIsMobile';
import { convertToCurrency, getColors, safeParse } from '../utils';
import Insights from './Insights';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{convertToCurrency(value)}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

const Visualization = ({
  monthlyMortgagePayment,
  propertyTax,
  homeInsurance,
  hoa,
}) => {
  const theme = useTheme();
  const colors = getColors(theme);
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { name: 'P & I', value: monthlyMortgagePayment, fill: colors[0] },
    { name: 'Property Tax', value: propertyTax, fill: colors[1] },
    { name: 'Home Insurance', value: homeInsurance, fill: colors[2] },
    { name: 'HOA', value: hoa, fill: colors[3] },
  ];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        mt: 8,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80} // Increased inner radius
            outerRadius={140} // Increased outer radius for larger chart
            dataKey="value"
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={onPieEnter}
            onMouseLeave={() => setActiveIndex(null)}
            animationDuration={500}
            animationEasing="ease-out"
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

const Chart = ({ 
  monthlyMortgagePayment,
  propertyTax,
  homeInsurance,
  hoa,
}) => {
  const isMobile = useIsMobile();

  return (
    <Box sx={{
      height: "100%",
      width: '100%', 
    }}>
      <Visualization
        monthlyMortgagePayment={safeParse(monthlyMortgagePayment, true)}
        propertyTax={safeParse(propertyTax, true)}
        homeInsurance={safeParse(homeInsurance, true)}
        hoa={safeParse(hoa, true)}
      />
    </Box>
  );
}

export default Chart;
