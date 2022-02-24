import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.styles.colors.gray.light}11;

  position: relative;
`;

export const Menu = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.styles.colors.pink.medium};

  left: -45px;

  svg {
    font-size: ${({ theme }) => theme.styles.font.medium};
    color: ${({ theme }) => theme.styles.colors.white.normal};
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.styles.colors.pink.light}44;
`;

export const ChildrenContainer = styled.div`
  width: 82vw;
  height: 100%;
`;
