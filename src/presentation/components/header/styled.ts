import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsContainer = styled.div`
  width: 80%;
  height: 60px;
  background-color: ${({ theme }) => theme.styles.colors.blue.bold};
  border-radius: ${({ theme }) => theme.styles.spacing.short};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0px 15px;

  svg {
    font-size: ${({ theme }) => theme.styles.font.medium};
    font-weight: 800;
  }

  h1 {
    font-size: ${({ theme }) => theme.styles.font.medium};
    font-weight: 500;
    margin-left: 10px;
  }
`;

export const ArrowBackContainer = styled.div`
  width: 18%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.styles.colors.blue.bold};
  border-radius: ${({ theme }) => theme.styles.spacing.short};

  svg {
    font-size: ${({ theme }) => theme.styles.font.large};
    color: ${({ theme }) => theme.styles.colors.white.normal};
    cursor: pointer;
  }
`;
