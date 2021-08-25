import { createTheme } from '@material-ui/core/styles';

const arcBlue = '#272941';
const arcOrange = '#FFBA60';

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
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
      fontFamily: 'Raleway',
      fontWeight: 700,
      textTransform: 'none',  //not all to uppercase
      fontSize: '2.5rem',
      color: `${arcBlue}`,
      lineHeight: 1.5
    },
    h3:{
        fontFamily: 'Pacifico',
        fontWeight: 400,
        textTransform: 'none',  //not all to uppercase
        fontSize: '1.8rem',
        color: `${arcBlue}`,
    },
    h4:{
      fontFamily: 'Raleway',
      fontWeight: 550,
      textTransform: 'none',  //not all to uppercase
      fontSize: '1.6rem',
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
    }


  }
});

export default theme;