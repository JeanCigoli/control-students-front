import React, { useCallback } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Flex,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { DrawerIcon } from '../styled';
import { DrawerDto } from '../../../../../domain/components/drawer-dto';
import { useAppDispatch } from '../../../../../data/hooks/redux';
import { deleteStudents } from '../../../../../data/usecases';

const DrawerContainer: React.FC<DrawerDto> = ({
  isOpen: isOpenDrawer,
  state,
  onClose: onCloseDrawer,
}) => {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onDeleteClick = useCallback(() => {
    onOpen();
  }, [state]);

  const deleteStudent = () => {
    onCloseDrawer();
    onClose();
    dispatch(deleteStudents(state.externalId));
  };

  const modal = () => (
    <>
      <Modal
        size="xs"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmação</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            Você deseja realmente excluir esse aluno?
          </ModalBody>

          <ModalFooter>
            <Button onClick={deleteStudent} colorScheme="blue" mr={3}>
              Sim
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );

  return (
    <>
      <Drawer
        isOpen={isOpenDrawer}
        placement="bottom"
        size="lg"
        onClose={onCloseDrawer}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#293241" color="#FFF">
          <DrawerCloseButton />
          <DrawerHeader>O que deseja?</DrawerHeader>

          <DrawerBody>
            <Flex color="white">
              <Center flex="1">
                <DrawerIcon>
                  <FaEdit />
                  <p>Editar</p>
                </DrawerIcon>
              </Center>
              <Center flex="1">
                <DrawerIcon onClick={onDeleteClick}>
                  <FaTrash />
                  <p>Excluir</p>
                </DrawerIcon>
              </Center>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {modal()}
    </>
  );
};

export default DrawerContainer;
