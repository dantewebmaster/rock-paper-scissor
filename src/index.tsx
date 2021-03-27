import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/global';

import { ContextProvider } from './contexts/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
