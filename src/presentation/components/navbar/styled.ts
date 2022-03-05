import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;

  position: fixed;
  z-index: 15;

  bottom: 15px;
  padding: 0px 10px;
`;

export const NavList = styled.nav`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.styles.colors.black.opacity};
  border-radius: ${({ theme }) => theme.styles.spacing.base};

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;
