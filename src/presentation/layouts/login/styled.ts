import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const LeftContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.styles.colors.blue.bold};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 70%;
    line-height: 1.5em;
    letter-spacing: 0.5px;
    text-align: center;
    margin-top: 20px;

    font-size: ${({ theme }) => theme.styles.font.medium};
    color: ${({ theme }) => theme.styles.colors.white.normal};
  }

  @media ${({ theme }) => theme.devices.mobileL} {
    width: 10vw;
    justify-content: flex-start;
    padding-top: 15px;

    h1 {
      display: none;
    }
  }
`;

export const RightContainer = styled.div`
  width: 50vw;
  height: 100vh;
  padding: 20px;

  background-color: ${({ theme }) => theme.styles.colors.black.normal};

  @media ${({ theme }) => theme.devices.mobileL} {
    width: 90vw;
  }
`;
