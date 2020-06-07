import React from 'react';
import {StatusBar} from 'react-native';

import Home from './src/pages/Home';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
};

export default App;
