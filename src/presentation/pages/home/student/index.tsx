import { Text } from '@chakra-ui/react';
import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import salesImage from '../../../../assets/user.png';
import { useAppDispatch, useAppSelector } from '../../../../data/hooks/redux';
import { listCountStudents } from '../../../../data/usecases/graphics/list-count-students';
import { SalesContainer, Button } from './styled';

const Students: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.graphics.data);

  const goToClasses = useCallback(() => {
    history.push('/alunos');
  }, []);

  useEffect(() => {
    listStudents();
  }, []);

  const listStudents = () => {
    dispatch(listCountStudents());
  };

  return (
    <SalesContainer>
      <div className="title">
        <Text fontSize="4xl" fontWeight="bold">
          {details.studentsAll.students}
        </Text>
        <Text fontSize="md" fontWeight="normal">
          alunos
        </Text>
      </div>

      <Text fontSize="md" fontWeight="normal">
        <span>{details.studentsAll.vacancies}</span> vagas na grade escolar
      </Text>

      <img src={salesImage} alt="Banner de frutas de vendas" />

      <Button onClick={goToClasses}>Ver alunos</Button>
    </SalesContainer>
  );
};

export default Students;
