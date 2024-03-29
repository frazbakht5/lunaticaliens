import { createTheme } from '@material-ui/core/styles';

const arcWhite = '#f9f9f9';
const arcBlue = '#272941';

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      white: `${arcWhite}`

    },
    primary: {
      main: `${arcWhite}`,
    },
    secondary: {
      main: `${arcBlue}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      textTransform: 'none',  //not all to uppercase
      fontSize: '1rem',
    },
    h2:{
      fontFamily: 'Roboto',
      fontWeight: 700,
      textTransform: 'none',  //not all to uppercase
      fontSize: '2.5rem',
      color: `${arcBlue}`,
      lineHeight: 1.5
    },
    h3:{
        fontFamily: 'Roboto',
        fontWeight: 500,
        textTransform: 'none',  //not all to uppercase
        fontSize: '1.5rem',
        color: `${arcBlue}`,
        lineHeight: "2.5rem"
    },
    h4:{
      fontFamily: 'Raleway',
      fontWeight: 550,
      textTransform: 'none',  //not all to uppercase
      fontSize: '1.6rem',
      color: `${arcBlue}`,
    },
    h6:{
      fontFamily: 'Roboto',
      fontWeight: 550,
      textTransform: 'none',  //not all to uppercase
      fontSize: '1.6rem',
    },
    body1:{
      fontFamily: 'Roboto',
      textTransform: 'none',  //not all to uppercase
      fontSize: '1rem',
      color: `${arcBlue}`,
    },
    estimate:{
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    subtitle1:{
      fontFamily: 'Raleway',
      textTransform: 'none',  //not all to uppercase
      fontSize: '1rem',
      color: `grey`,
    },
    caption:{
      fontFamily: 'Roboto',
      textTransform: 'none',  //not all to uppercase
      fontSize: '0.5rem',
      color: `${arcWhite}`,
    }


  }
});

export default theme;