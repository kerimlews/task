import React from 'react';
import { render } from 'react-dom';
import Routes from 'components/Routes';
import { BrowserRouter } from 'react-router-dom';

import 'scss/app.scss';

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
