import React, { useState } from 'react';
import { Stat, StatNumber, StatHelpText } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

import { Container, Card, Icon } from './styled';

const Details: React.FC = () => {
  const [details, setDetails] = useState([
    {
      class: '1ª Viagem',
      students: 43,
      period: 'Manhã',
    },
    {
      class: '1ª Viagem',
      students: 44,
      period: 'Tarde',
    },
    {
      class: '2ª Viagem',
      students: 41,
      period: 'Manhã',
    },
    {
      class: '2ª Viagem',
      students: 41,
      period: 'Manhã',
    },
  ]);

  return (
    <Container>
      {details.map((value, number) => (
        <Card key={number}>
          <p>{value.class}</p>

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
