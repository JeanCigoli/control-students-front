import styled from 'styled-components';

export const Card = styled.div`
  width: 110px;
  height: 100%;
  background-color: ${({ theme }) => theme.styles.colors.black.opacity};
  border-radius: ${({ theme }) => theme.styles.spacing.base};
  padding: 1vh;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  p {
    font-size: ${({ theme }) => theme.styles.font.small};
  }

  .students-count {
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 1.5em;

    h3 {
      font-size: ${({ theme }) => theme.styles.font.large};
      font-weight: bolder;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 170px;
  margin-top: 15px;

  display: -webkit-inline-box;

  overflow-x: scroll;

  ${Card} + ${Card} {
    margin-left: 5vw;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: ${({ theme }) => theme.styles.font.large};
    color: ${({ theme }) => theme.styles.colors.white.normal};
  }
`;
