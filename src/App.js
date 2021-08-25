import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';

import NavBar from './Components/NavBar'
import theme from './Components/Theme'
// import LandingPage from './Components/LandingPage'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Route exact path="/" component={() => <div>Landing Page</div>} />
        </Switch>
        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
