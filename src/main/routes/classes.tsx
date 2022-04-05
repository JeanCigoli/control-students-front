import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CreateClasses, Classes } from '../../presentation/pages';

const ProductRoute: React.FC<any> = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/`} exact component={Classes} />

    <Route path={`${match.url}/cadastro`} exact component={CreateClasses} />
  </Switch>
);

export default ProductRoute;
