import React, { useCallback, useEffect, useState } from 'react';
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
import { listProducts } from '../../../../data/usecases/products/list-all-product';
import history from '../../../../infra/history';

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [op, setOp] = useState([
    {
      name: '2° Viagem',
      period: 'Manhã',
    },
  ]);

  const [students, setStudents] = useState({
    data: [
      {
        id: 1,
        name: 'Jean Cigoli',
        ra: '1718101729',
        class: '3AM',
      },
    ],
  });

  const setSelectedClass = useCallback((value: any) => {
    console.log(value);
    onOpen();
  }, []);

  // useEffect(() => {
  //   listAllProducts();
  // }, []);

  const onSubmit = (values: any) => {
    console.log(values);
  };

  // const listAllProducts = () => {
  //   dispatch(listProducts({ page: 0, limit: 10 }));
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
        <Head title="Alunos" icon={<IoMdSchool />} />

        <FiltersContainer>
          <Select
            bg="#364559"
            border="none"
            height="60px"
            placeholder="Turmas"
            size="md"
          >
            {op.map((value, index) => (
              <option
                key={index}
                value={index}
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
      {students.data ? (
        students.data.map((value) => (
          <ClassesContainer key={value.id}>
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
