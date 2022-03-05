import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  height: 70px;

  position: relative;

  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    position: absolute;
    height: 90%;
    right: 0px;
    bottom: 0px;
  }

  h1 {
    font-size: ${({ theme }) => theme.styles.font.default};
    letter-spacing: 0.5px;
    font-weight: bold;
  }

  p {
    letter-spacing: 0.5px;
    font-size: ${({ theme }) => theme.styles.font.small};
  }
`;
