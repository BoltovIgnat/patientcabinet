import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import 'typeface-roboto';

import Root from './components/Root';
import configureStore from './config/configureStore';

const div = document.createElement('div');
div.id = 'root';
document.body.appendChild(div);
document.body.style.margin = 0;
document.body.style.padding = 0;

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
