// Std modules
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {useStrict} from 'mobx';

// Styles
import 'css/main.css';

// Components
import App from 'components/App';

// etc
import {initApp} from 'core';

// Allow modity MobX store only by using @actions
useStrict(true);

// Render app
ReactDOM.render(
  <BrowserRouter>
  	<App/>
  </BrowserRouter>,
  document.getElementById('root')
);

// Run some functions from 'core'
initApp();