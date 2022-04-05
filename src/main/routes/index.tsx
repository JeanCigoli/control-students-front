import React from 'react';
import { Switch } from 'react-router-dom';

import { DashboardLayout, LoginLayout } from '../../presentation/layouts';
import { Home, Login } from '../../presentation/pages';
import Routes from '../config/routes';
import ProductRoute from './product';
import ClassesRoute from './classes';

const Router: React.FC = () => (
  <Switch>
    <Routes
      path="/"
      isPrivate={false}
      exact
      component={Login}
      layout={LoginLayout}
    />

    <Routes
      path="/home"
      isPrivate
      exact
      component={Home}
      layout={DashboardLayout}
    />

    <Routes
      path="/turmas"
      isPrivate
      component={ClassesRoute}
      layout={DashboardLayout}
    />

    <Routes
      path="/alunos"
      isPrivate
      component={ProductRoute}
      layout={DashboardLayout}
    />
  </Switch>
);

export default Router;
