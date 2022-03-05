import styled from 'styled-components';

export const ClassesContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.styles.colors.black.opacity};

  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.styles.spacing.short};

  padding: 10px 15px;

  h1 {
    font-size: ${({ theme }) => theme.styles.font.default};
    font-weight: bolder;
  }

  p {
    font-size: ${({ theme }) => theme.styles.font.small};
    font-weight: 400;
    color: ${({ theme }) => theme.styles.colors.white.opacity};
  }

  .line-effect {
    width: 5px;
    height: 100%;
    background-color: ${({ theme }) => theme.styles.colors.blue.medium};

    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;

  ${ClassesContainer} + ${ClassesContainer} {
    margin-top: 15px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
`;

export const Icon = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;

  svg {
    font-size: ${({ theme }) => theme.styles.font.large};
    color: ${({ theme }) => theme.styles.colors.white.normal};
  }
`;

export const DrawerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 150px;
  height: 90px;

  flex-direction: column;

  margin: 10px 0px;

  border-radius: ${({ theme }) => theme.styles.spacing.short};
  border: 1px solid #fff;

  svg {
    font-size: ${({ theme }) => theme.styles.font.large};
  }
`;
