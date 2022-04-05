import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import Head from '../../../components/header';

import { Container, Header } from './styled';
import { useAppDispatch, useAppSelector } from '../../../../data/hooks/redux';
import { listAllClassesType } from '../../../../data/usecases';

import FormPrimary from './form-primary';
import FormSecondary from './form-secondary';

const CreateProduct: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const classesType = useAppSelector((state) => state.classesType);

  useEffect(() => {
    listClassesType();
  }, []);

  const listClassesType = () => {
    dispatch(listAllClassesType());
  };

  const headerAction = useCallback(() => {
    history.go(-1);
  }, []);

  return (
    <Container>
      <Header>
        <Head
          title="Cadastro"
          icon={<FaUserPlus />}
          onClick={headerAction}
          isGoBack
        />
      </Header>

      <Tabs isFitted variant="soft-rounded" colorScheme="blue">
        <TabList>
          {classesType.data.length &&
            classesType.data.map((value) => (
              <Tab
                key={value.externalId}
                _selected={{ color: '#FFF', bg: '#364559' }}
                color="#FFFFFF99"
              >
                {value.description}
              </Tab>
            ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <FormPrimary />
          </TabPanel>
          <TabPanel>
            <FormSecondary />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default CreateProduct;
