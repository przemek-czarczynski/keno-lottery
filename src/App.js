import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import MainBoard from './components/MainBoard';
import {useStyles} from './styles/styles';

import {JssProvider} from 'react-jss'
import {jss} from 'react-jss'
import vendorPrefixer from 'jss-plugin-vendor-prefixer'

import {TilesContextProvider} from './context/TilesContext';

jss.use(vendorPrefixer())


function App() {
  const classes = useStyles();

  return (
    <JssProvider jss={jss}>
      <BrowserRouter>
        <TilesContextProvider>
          <div className={classes.main}>
            <h1 className={classes.title}>Keno</h1>
            <MainBoard/>    
          </div>
        </TilesContextProvider>
      </BrowserRouter>
    </JssProvider>
  );
}

export default App;
