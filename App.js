import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { createApp } from '@phenomic/preset-react-app/lib/client';

import routes from 'constants/routes';
import 'styles/index.scss';

export default createApp(() => (
  <Router history={browserHistory}>
    {routes.map(({ component: Component, path }, i) => (
      <Route
        key={i}
        path={`/${path}`}
        component={props => <Component {...props} folder={path} />}
      />
    ))}
  </Router>
));
