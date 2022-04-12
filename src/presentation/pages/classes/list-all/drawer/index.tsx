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

import { FaCloudDownloadAlt, FaTrash } from 'react-icons/fa';

import { useAppDispatch } from '../../../../../data/hooks/redux';
import { DrawerIcon } from '../styled';
import { DrawerDto } from '../../../../../domain/components/drawer-dto';
import { deleteClasses } from '../../../../../data/usecases';

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

  const deleteClasse = () => {
    onCloseDrawer();
    onClose();
    dispatch(deleteClasses(state.externalId));
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
            Você deseja realmente excluir essa turma? Ao exclui-lá também estará
            removendo os alunos vinculado a ela.
          </ModalBody>

          <ModalFooter>
            <Button onClick={deleteClasse} colorScheme="blue" mr={3}>
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
                  <FaCloudDownloadAlt />
                  <p>Baixar relatório</p>
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
