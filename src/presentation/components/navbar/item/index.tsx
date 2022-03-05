import React from 'react';
import { Link } from 'react-router-dom';
import { NavItemDTO } from '../../../../domain/components/nav-item-dto';

import { Container } from './styled';

const item: React.FC<NavItemDTO> = ({ active, icon, link }) => (
  <Container active={active}>
    <Link to={link}>{icon} </Link>
  </Container>
);

export default item;
