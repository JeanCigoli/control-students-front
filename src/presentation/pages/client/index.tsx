import React, { useCallback, useEffect, useState } from 'react';
import {
  FaMapMarkedAlt,
  FaSun,
  FaMoon,
  FaCloudDownloadAlt,
  FaTrash,
} from 'react-icons/fa';
import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Skeleton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

import Head from '../../components/header';
import {
  Container,
  Header,
  ClassesContainer,
  Icon,
  DrawerIcon,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../../data/hooks/redux';
import { listClasses } from '../../../data/usecases/classes/list-all-classes';

const Client: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const classes = useAppSelector((state) => state.classes);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [classSelected, setClass] = useState(null);
  const [classes, setClasses] = useState({
    data: [
      {
        id: 1,
        period: 'Manhã',
        class: '2° Viagem',
      },
      {
        id: 2,
        period: 'Manhã',
        class: '2° Viagem',
      },
    ],
  });

  const setSelectedClass = useCallback((value: any) => {
    setClass(value);
    onOpen();
  }, []);

  // useEffect(() => {
  //   listAllClasses();
  // }, []);

  // const listAllClasses = () => {
  //   dispatch(listClasses());
  // };

  const drawer = () => (
    <Drawer isOpen={isOpen} placement="bottom" size="lg" onClose={onClose}>
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
              <DrawerIcon>
                <FaTrash />
                <p>Excluir</p>
              </DrawerIcon>
            </Center>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Container>
      <Header>
        <Head title="Turmas" icon={<FaMapMarkedAlt />} />
      </Header>

      {classes.data ? (
        classes.data.map((value) => (
          <ClassesContainer
            onClick={() => setSelectedClass(value)}
            key={value.id}
          >
            <div className="line-effect" />

            <h1>{value.class}</h1>
            <p>{value.period}</p>

            <Icon>{value.period === 'Tarde' ? <FaMoon /> : <FaSun />}</Icon>
          </ClassesContainer>
        ))
      ) : (
        <Stack spacing="20px">
          {[1, 2, 3, 4].map((_, index) => (
            <Skeleton
              borderRadius="md"
              key={index}
              startColor="blue.500"
              endColor="blue.500"
              height="20px"
            />
          ))}
        </Stack>
      )}

      {drawer()}
    </Container>
  );
};

export default Client;
