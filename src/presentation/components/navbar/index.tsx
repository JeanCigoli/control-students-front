import React, { useCallback, useState } from 'react';
import { FaHome, FaMapMarkedAlt } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';

import NavItem from './item';
import { NavContainer, NavList } from './styled';
import { logout } from '../../../data/usecases/auth/logout';

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState(1);

  const alterNav = useCallback((number: number) => {
    setActiveNav(number);
  }, []);

  return (
    <NavContainer>
      <NavList>
        <NavItem
          active={activeNav === 1}
          number={1}
          icon={<FaHome />}
          link="/home"
          onClick={alterNav}
        />

        <NavItem
          active={activeNav === 2}
          number={2}
          icon={<IoMdSchool />}
          link="/alunos"
          onClick={alterNav}
        />

        <NavItem
          active={activeNav === 3}
          number={3}
          icon={<FaMapMarkedAlt />}
          link="/turmas"
          onClick={alterNav}
        />
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
