import React from 'react';
import { FaHome, FaMapMarkedAlt } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';

import NavItem from './item';
import { NavContainer, NavList } from './styled';
import { useAppDispatch } from '../../../data/hooks/redux';
import { logout } from '../../../data/usecases/auth/logout';

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();

  // const exit = () => {
  //   dispatch(logout());
  // };

  return (
    <NavContainer>
      <NavList>
        <NavItem active icon={<FaHome />} link="/" />

        <NavItem active={false} icon={<IoMdSchool />} link="/" />

        <NavItem active={false} icon={<FaMapMarkedAlt />} link="/" />
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
