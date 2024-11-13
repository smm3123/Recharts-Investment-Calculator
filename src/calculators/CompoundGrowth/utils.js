export const convertToCurrency = (value) => {
  const options = { style: 'currency', currency: 'USD' };
  return value.toLocaleString('en-US', options);
}