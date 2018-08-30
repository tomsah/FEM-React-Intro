// @flow

import React from 'react';
import { render } from 'react-dom';
import Perf from 'react-addons-perf';
import App from './App';

const root = document.getElementById('app');

window.Perf = Perf;
Perf.start();

const renderApp = () => {
  if (root !== null) {
    render(<App />, root);
  }
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
