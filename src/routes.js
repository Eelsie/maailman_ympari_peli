import React from 'react';
import {Route, indexRoute} from 'react-router';

import App from './App';
import Alypaa from './components/alypaa';

export default (
  <Route path="/" component={App}>
    <Route path="alypaa" component={Alypaa}/>
  </Route>
);
