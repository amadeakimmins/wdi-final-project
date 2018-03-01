import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import HomePage from '../utility/HomePage';
import BrandsIndex from './BrandsIndex';
import BrandsShow from  './BrandsShow';
import BrandsNew from './BrandsNew';
import BrandsEdit from './BrandsEdit';
import ProfilePage from '../user/ProfilePage';

const BrandsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/users/:id" component={ProfilePage} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/brands" component={BrandsIndex} />
      <ProtectedRoute exact path="/brands/new" component={BrandsNew} />
      <ProtectedRoute exact path="/brands/:id/edit" component={BrandsEdit} />
      <Route exact path="/brands/:id" component={BrandsShow} />
    </Switch>
  );
};

export default BrandsRoutes;
