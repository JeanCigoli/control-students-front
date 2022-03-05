import React, { useCallback } from 'react';
import { IoMdAdd } from 'react-icons/io';
import history from '../../../infra/history';
import { Container, DetailsContainer, ArrowBackContainer } from './styled';

const Header: React.FC<{ title: string; icon: any }> = ({ title, icon }) => {
  const goBack = useCallback(() => {
    history.back();
  }, []);

  return (
    <Container>
      <DetailsContainer>
        {icon}
        <h1>{title}</h1>
      </DetailsContainer>

      <ArrowBackContainer>
        <IoMdAdd />
      </ArrowBackContainer>
    </Container>
  );
};

export default Header;
