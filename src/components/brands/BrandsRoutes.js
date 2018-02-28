import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import ProtectedRoute from '../utility/ProtectedRoute';

import BrandsIndex from './BrandsIndex';
import BrandsShow from  './BrandsShow';
// import BrandsNew from './BrandsNew';
// import BrandsEdit from './BrandsEdit';

const BrandsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={BrandsIndex} />
      {/* <ProtectedRoute path="/foods/new" component={BrandsNew} />
      <ProtectedRoute path="/foods/:id/edit" component={BrandsEdit} /> */}
      <Route path="/brands/:id" component={BrandsShow} />
    </Switch>
  );
};

export default BrandsRoutes;
