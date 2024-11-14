export const convertToCurrency = (value) => {
  const options = { style: 'currency', currency: 'USD' };
  return value.toLocaleString('en-US', options);
}

// Helper function to safely parse numbers, defaulting to 0
export const safeParse = (value, isFloat = false) => {
  const parsed = isFloat ? parseFloat(value) : parseInt(value, 10);
  return isNaN(parsed) ? 0 : parsed;
};

export const getColors = (theme) => {
  return [
    theme.palette.primary.main,
    'turquoise',
    '#ffc658',
    '#ff8042',
  ];
}