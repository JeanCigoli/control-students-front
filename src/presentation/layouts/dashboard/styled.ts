import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.styles.colors.black.normal};

  color: ${({ theme }) => theme.styles.colors.white.normal};

  position: relative;
  padding: 10px;

  overflow-x: hidden;
  overflow-y: scroll;
`;

export const ChildrenContainer = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
`;
