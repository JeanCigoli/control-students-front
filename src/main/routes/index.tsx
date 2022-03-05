import React from 'react';
import { Switch } from 'react-router-dom';

import { DashboardLayout } from '../../presentation/layouts';
import { Home, Classes } from '../../presentation/pages';
import Routes from '../config/routes';
import ProductRoute from './product';

const Router: React.FC = () => (
  <Switch>
    <Routes
      path="/"
      isPrivate={false}
      exact
      component={Home}
      layout={DashboardLayout}
    />

    <Routes
      path="/turmas"
      isPrivate={false}
      exact
      component={Classes}
      layout={DashboardLayout}
    />

    <Routes
      path="/alunos"
      isPrivate={false}
      component={ProductRoute}
      layout={DashboardLayout}
    />

    {/* <Routes
      path="/clientes"
      isPrivate
      exact
      component={Client}
      layout={DashboardLayout}
    />
*/}
  </Switch>
);

export default Router;
