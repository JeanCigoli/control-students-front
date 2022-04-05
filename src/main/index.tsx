import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './style/global-styled';
import { props } from './style/theme';
import Routes from './routes';
import { store } from '../infra/redux/store';
import { theme } from './style/chakra';

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={props}>
      <ChakraProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Routes />
          <ToastContainer
            position={toast.POSITION.TOP_RIGHT}
            autoClose={6000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Router>
      </ChakraProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
