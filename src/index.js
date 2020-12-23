import React from 'react';
import { render } from 'react-dom';
import Router from 'components/Router';
import { BrowserRouter } from 'react-router-dom';

import 'scss/app.scss';

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
