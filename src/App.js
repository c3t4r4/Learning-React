import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import Routes from './Routes';

import { Loading } from './view/components';

import { Button, TextField, Select } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: red[500]
    },
  },
  props: {
    MuiTextField: {
      variant: "outlined",
      fullWidth: true
    },
    MuiSelect: {
      variant: "outlined",
      fullWidth: true
    }
  },
});

const App = () => (
  <Provider store={ store }>
    <ThemeProvider theme={ theme  }>
      <Loading />
      <Routes   />
    </ThemeProvider>
  </Provider>
)

export default App;