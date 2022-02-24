import React, { useCallback } from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { TiArrowBack } from 'react-icons/ti';
import history from '../../../infra/history';
import { DetailAll } from '../cards';
import { Container, DetailsContainer, ArrowBackContainer } from './styled';

const Header: React.FC<{ title: string; icon: any }> = ({ title, icon }) => {
  const goBack = useCallback(() => {
    history.back();
  }, []);

  return (
    <Container>
      <DetailsContainer>
        <DetailAll icon={icon} />
        <h1>{title}</h1>
      </DetailsContainer>

      <ArrowBackContainer>
        <Tooltip
          label="voltar"
          bg="blackAlpha.600"
          placement="left"
          fontSize="md"
        >
          <IconButton
            colorScheme="blackAlpha"
            aria-label="Retornar"
            icon={<TiArrowBack />}
            onClick={goBack}
          />
        </Tooltip>
      </ArrowBackContainer>
    </Container>
  );
};

export default Header;
