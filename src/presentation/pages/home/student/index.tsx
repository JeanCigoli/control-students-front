import { Text } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import salesImage from '../../../../assets/user.png';
import history from '../../../../infra/history';
import { SalesContainer, Button } from './styled';

const Students: React.FC = () => {
  const [details, setDetails] = useState({
    quantityStudents: 144,
    quantityVacancies: 10,
  });

  const goToClasses = useCallback(() => {
    history.push('/turmas');
  }, []);

  return (
    <SalesContainer>
      <div className="title">
        <Text fontSize="4xl" fontWeight="bold">
          {details.quantityStudents}
        </Text>
        <Text fontSize="md" fontWeight="normal">
          alunos
        </Text>
      </div>

      <Text fontSize="md" fontWeight="normal">
        <span>{details.quantityVacancies}</span> vagas disponíveis no momento
      </Text>

      <img src={salesImage} alt="Banner de frutas de vendas" />

      <Button onClick={goToClasses}>Ver alunos</Button>
    </SalesContainer>
  );
};

export default Students;
