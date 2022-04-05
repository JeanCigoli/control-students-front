import { Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAppSelector } from '../../../../data/hooks/redux';
import { GraphicContainer, Button } from './styled';

const Graphic: React.FC = () => {
  const classes = useAppSelector((state) => state.classes);

  const [reports, setReports] = useState([
    {
      externalId: 1,
      report: 'Chamada de alunos',
    },
    {
      externalId: 2,
      report: 'Lista de alunos',
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
            key={value.externalId}
            value={value.externalId}
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
        {classes.data.map((value: any) => (
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

      <Button>Baixar</Button>
    </GraphicContainer>
  );
};

export default Graphic;
