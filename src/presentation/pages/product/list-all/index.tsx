import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoMdSchool, IoMdSettings } from 'react-icons/io';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {
  Skeleton,
  Stack,
  Select,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Flex,
  Center,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../../data/hooks/redux';
import Head from '../../../components/header';
import {
  Container,
  Header,
  FiltersContainer,
  ClassesContainer,
  Icon,
  DrawerIcon,
} from './styled';
import { listClasses, listStudents } from '../../../../data/usecases';

const Products: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const students = useAppSelector((state) => state.students);
  const classes = useAppSelector((state) => state.classes);

  const [classId, setClassId] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    listAllStudents();
    listClass();
  }, []);

  useEffect(() => {
    listAllStudents();
  }, [classId]);

  const listClass = () => {
    dispatch(listClasses());
  };

  const listAllStudents = () => {
    dispatch(listStudents(classId));
  };

  const headerAction = useCallback(() => {
    history.push('/alunos/cadastro');
  }, []);

  const setSelectedClass = useCallback((value: any) => {
    onOpen();
  }, []);

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
                <FaEdit />
                <p>Editar</p>
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
        <Head title="Alunos" icon={<IoMdSchool />} onClick={headerAction} />

        <FiltersContainer>
          <Select
            bg="#364559"
            border="none"
            height="60px"
            placeholder="Turmas"
            size="md"
            onChange={(value) => {
              setClassId(() => value.target.value);
            }}
          >
            {classes.data.length &&
              classes.data.map((value: any) => (
                <option
                  key={value.externalId}
                  value={value.externalId}
                  style={{
                    background: '#364559',
                  }}
                >
                  {value.name} - {value.period}
                </option>
              ))}
          </Select>
        </FiltersContainer>
      </Header>
      {students.data.length ? (
        students.data.map((value: any) => (
          <ClassesContainer key={value.externalId}>
            <div className="line-effect" />

            <h1>{value.name}</h1>
            <p>
              {value.ra} - {value.class}
            </p>

            <Icon>
              <IoMdSettings onClick={() => setSelectedClass(value)} />
            </Icon>
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

export default Products;
