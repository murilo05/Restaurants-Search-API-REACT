import React from 'react';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';
import logo from './logo.svg';
import './App.css';
import store from './redux/store'
import theme from './theme';
import Home from './pages/Home/index';
import { Reset } from 'styled-reset';



function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset/>
        <Home/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
