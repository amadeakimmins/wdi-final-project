import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login       from './Login';
import Register    from './Register';

const AuthenticationRoutes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default AuthenticationRoutes;
