import { createTheme } from '@mui/material/styles';

const primaryMain = '#2de34c';
const secondaryMain = '#52d166';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'black',
          backgroundColor: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '5px 5px 0px 0px',
          '&::placeholder': {
            color: 'black',
            opacity: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'black',
          '&.Mui-focused': {
            color: 'black',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: secondaryMain,
          },
        }
     },
    },
  },
});

export default theme;
