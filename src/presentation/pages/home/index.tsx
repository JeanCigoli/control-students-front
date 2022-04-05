import React, { useEffect } from 'react';

import Report from './report';
import Profile from './profile';
import Students from './student';
import Details from './details';

import { Container } from './styled';
import { useAppDispatch } from '../../../data/hooks/redux';
import { listClasses } from '../../../data/usecases/classes/list-all-classes';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    listDefaultValues();
  }, []);

  const listDefaultValues = () => {
    dispatch(listClasses());
  };

  return (
    <Container>
      <Profile />

      <Students />

      <Details />

      <Report />
    </Container>
  );
};

export default Home;
