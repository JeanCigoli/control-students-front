import React from 'react';

import Graphic from './graphic';
import Profile from './profile';
import Students from './student';
import Details from './details';

import { Container } from './styled';

const Home: React.FC = () => (
  <Container>
    <Profile />

    <Students />

    <Details />

    <Graphic />
  </Container>
);

export default Home;
