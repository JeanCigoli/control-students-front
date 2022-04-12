import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  CreateProduct,
  Products,
  UpdateStudents,
} from '../../presentation/pages';

const ProductRoute: React.FC<any> = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/`} exact component={Products} />

    <Route path={`${match.url}/cadastro`} exact component={CreateProduct} />

    <Route path={`${match.url}/atualização`} exact component={UpdateStudents} />
  </Switch>
);

export default ProductRoute;
