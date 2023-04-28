import { grey, blue, common } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#9e93ff',
      main: '#757ce8',
      dark: '#757ce8',
      contrastText: '#fff',
    },
    divider: grey[700],
    background: {
      default: grey[900],
      paper: grey[900],
    },
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
  },
  typography: {
    fontFamily: ['Oswald', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    body1: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: blue[800],
        },
      },
    },
  },
});
export default darkTheme;
