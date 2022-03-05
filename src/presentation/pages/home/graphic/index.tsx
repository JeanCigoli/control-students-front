import { Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GraphicContainer, Button } from './styled';

const Graphic: React.FC = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      report: 'Chamada de alunos',
    },
    {
      id: 2,
      report: 'Lista de alunos',
    },
  ]);

  const [classes, setClasses] = useState([
    {
      id: 1,
      class: '2º viagem - manhã',
    },
    {
      id: 2,
      class: 'Robótica',
    },
  ]);

  return (
    <GraphicContainer>
      <h1>Relatórios</h1>

      <Select
        bg="#364559"
        height="60px"
        placeholder="Tipo de relatórios"
        size="md"
        borderColor="#FFFFFF66"
      >
        {reports.map((value) => (
          <option
            key={value.id}
            value={value.id}
            style={{
              background: '#364559',
            }}
          >
            {value.report}
          </option>
        ))}
      </Select>

      <Select
        bg="#364559"
        height="60px"
        placeholder="Selecione a turma"
        size="md"
        borderColor="#FFFFFF66"
      >
        {classes.map((value) => (
          <option
            key={value.id}
            value={value.id}
            style={{
              background: '#364559',
            }}
          >
            {value.class}
          </option>
        ))}
      </Select>

      <Button>Baixar</Button>
    </GraphicContainer>
  );
};

export default Graphic;
