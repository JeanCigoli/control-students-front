import React from 'react';
import { Link } from 'react-router-dom';
import { NavItemDTO } from '../../../../domain/components/nav-item-dto';

import { Container } from './styled';

const item: React.FC<NavItemDTO> = ({
  active,
  icon,
  link,
  number,
  onClick,
}) => (
  <Container active={active}>
    <Link onClick={() => onClick(number)} to={link}>
      {icon}
    </Link>
  </Container>
);

export default item;
