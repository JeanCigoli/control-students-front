import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';

import Head from '../../../components/header';

import { Container, Header } from './styled';

import FormPrimary from './form-primary';
import FormSecondary from './form-secondary';

const UpdateProduct: React.FC = () => {
  const history = useHistory();

  const [type, setType] = useState('');
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const { state } = history.location;
    setType(state.student?.classes?.type || '');
    setStudent(state.student);
  }, []);

  const headerAction = useCallback(() => {
    history.go(-1);
  }, []);

  return (
    <Container>
      <Header>
        <Head
          title="Atualização"
          icon={<FaUserEdit />}
          onClick={headerAction}
          isGoBack
        />
      </Header>

      {type === 'PRIMARY' && <FormPrimary data={student} />}

      {type === 'SECONDARY' && <FormSecondary data={student} />}
    </Container>
  );
};

export default UpdateProduct;
