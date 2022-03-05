import React from 'react';

import NavBar from '../../components/navbar';

import { Container, ChildrenContainer } from './styled';

const Dashboard: React.FC = ({ children }) => (
  <Container>
    <ChildrenContainer>{children}</ChildrenContainer>
    <NavBar />
  </Container>
);

export default Dashboard;
