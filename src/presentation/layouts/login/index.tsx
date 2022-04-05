import React from 'react';

import { Container, LeftContainer, RightContainer } from './styled';

const Login: React.FC = ({ children }) => (
  <Container>
    <LeftContainer />
    <RightContainer>{children}</RightContainer>
  </Container>
);

export default Login;
