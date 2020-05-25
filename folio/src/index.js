import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Work Sans',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
