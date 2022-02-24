import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HiMenuAlt2 } from 'react-icons/hi';
import NavBar from '../../components/navbar';

import { Container, NavContainer, ChildrenContainer, Menu } from './styled';

const Dashboard: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody padding="0">
            <NavContainer>
              <NavBar />
            </NavContainer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Menu onClick={onOpen}>
        <HiMenuAlt2 />
      </Menu>

      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default Dashboard;
