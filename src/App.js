import React from 'react';

import Menu from './container/menu/menu.component';
import AccountContainer from './container/account/account.connector';

import './App.css';
import './styles/bootstrap.min.css';
import './styles/bootstrap-theme.min.css';

const App = () => (
  <div className="App">
    <Menu />
    <AccountContainer />
  </div>
);

export default App;
