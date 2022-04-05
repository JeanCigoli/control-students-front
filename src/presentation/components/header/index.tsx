import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { TiArrowBack } from 'react-icons/ti';
import { HeaderDto } from '../../../domain/components/header-dto';
import { Container, DetailsContainer, ArrowBackContainer } from './styled';

const Header: React.FC<HeaderDto> = ({ title, icon, onClick, isGoBack }) => (
  <Container>
    <DetailsContainer>
      {icon}
      <h1>{title}</h1>
    </DetailsContainer>

    <ArrowBackContainer onClick={onClick}>
      {isGoBack ? <TiArrowBack /> : <IoMdAdd />}
    </ArrowBackContainer>
  </Container>
);

export default Header;
