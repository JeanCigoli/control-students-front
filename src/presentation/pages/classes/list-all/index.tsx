import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaMapMarkedAlt, FaSun, FaMoon } from 'react-icons/fa';
import { Skeleton, Stack, useDisclosure } from '@chakra-ui/react';

import Head from '../../../components/header';
import Drawer from './drawer';
import { Container, Header, ClassesContainer, Icon, Layout } from './styled';
import { useAppDispatch, useAppSelector } from '../../../../data/hooks/redux';
import { listClasses } from '../../../../data/usecases/classes/list-all-classes';

const Client: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const classes = useAppSelector((state) => state.classes);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [classe, setClasse] = useState(null);

  useEffect(() => {
    listAllClasses();
  }, []);

  const listAllClasses = () => {
    dispatch(listClasses());
  };

  const headerAction = useCallback(() => {
    history.push('/turmas/cadastro');
  }, []);

  const setSelectedClass = useCallback((value: any) => {
    setClasse(value);
    onOpen();
  }, []);

  return (
    <Container>
      <Header>
        <Head title="Turmas" icon={<FaMapMarkedAlt />} onClick={headerAction} />
      </Header>

      <Layout>
        {!classes.isFetch ? (
          classes.data.length ? (
            classes.data.map((value: any) => (
              <ClassesContainer
                onClick={() => setSelectedClass(value)}
                key={value.externalId}
              >
                <div className="line-effect" />

                <h1>{value.name}</h1>
                <p>{value.period}</p>

                <Icon>{value.period === 'Tarde' ? <FaMoon /> : <FaSun />}</Icon>
              </ClassesContainer>
            ))
          ) : (
            <p>Nenhuma turma cadastrada!</p>
          )
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
      </Layout>

      <Drawer state={classe} isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default Client;
