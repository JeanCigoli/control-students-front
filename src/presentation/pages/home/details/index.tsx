import React, { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

import { Container, Card, Icon } from './styled';
import { useAppDispatch, useAppSelector } from '../../../../data/hooks/redux';
import { listAllClassesCount } from '../../../../data/usecases/graphics/list-all-classes-count';

const Details: React.FC = () => {
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.graphics.data);

  useEffect(() => {
    listClass();
  }, []);

  const listClass = () => {
    dispatch(listAllClassesCount());
  };

  return (
    <Container>
      {details.classes.map((value: any) => (
        <Card key={value.externalId}>
          <p>{value.name}</p>

          <div className="students-count">
            <h3>{value.students}</h3>
            <p> alunos</p>
          </div>

          <Icon>{value.period === 'Tarde' ? <FaMoon /> : <FaSun />}</Icon>
        </Card>
      ))}
    </Container>
  );
};

export default Details;
