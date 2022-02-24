import React from 'react';
import { Switch } from 'react-router-dom';
import { Login, Home, Client, Products } from '../../presentation/pages';
import { LoginLayout, DashboardLayout } from '../../presentation/layouts';
import Routes from '../config/routes';
import ProductRoute from './product';

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
      path="/dashboard"
      isPrivate
      exact
      component={Home}
      layout={DashboardLayout}
    />

    <Routes
      path="/clientes"
      isPrivate
      exact
      component={Client}
      layout={DashboardLayout}
    />

    <Routes
      path="/estoques"
      isPrivate
      component={ProductRoute}
      layout={DashboardLayout}
    />
  </Switch>
);

export default Router;
