import React from 'react';
import logo from './logo.svg';
import './App.css';
import theme from './theme/thme';
import { Rouer } from './router/Router';

import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Rouer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
