import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';
import React, { useState, useEffect, useRef } from 'react';
// import '@fontsource/roboto';

import LandingPage from './Components/LandingPage'
import theme from './Components/Theme'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ProjectDisplay from './Components/ProjectDisplay'



function App() {
  // const title = 'WebNOC';
  // const description = 'Project description of the Project.'
  // const image = sample1;
  // const playStoreLink = 'https://www.google.com.pk/';
  // const websiteLink = 'https://www.google.com.pk/';

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [playStoreLink, setPlayStoreLink] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');



  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        {/* <LandingPage/> */}
        <Switch>
          <Route exact path="/" component={() => <LandingPage

            setTitle={setTitle}
            setDescription={setDescription}
            setImage={setImage}
            setPlayStoreLink={setPlayStoreLink}
            setWebsiteLink={setWebsiteLink}

          />} />
          <Route exact path="/project" component={ProjectDisplay} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
