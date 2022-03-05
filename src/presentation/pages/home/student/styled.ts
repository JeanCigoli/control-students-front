import styled from 'styled-components';

export const SalesContainer = styled.div`
  width: 100%;
  height: 170px;
  background-color: ${({ theme }) => theme.styles.colors.blue.bold};
  border-radius: ${({ theme }) => theme.styles.spacing.base};
  color: ${({ theme }) => theme.styles.colors.white.normal};
  font-size: ${({ theme }) => theme.styles.font.default};

  padding: 25px 20px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;

  position: relative;

  line-height: 1.5em;

  img {
    height: 30%;
    object-fit: contain;
    position: absolute;

    bottom: 10px;
    left: 10px;
  }

  span {
    font-weight: bold;
  }

  .title {
    display: flex;
    align-items: baseline;

    p {
      margin-right: 5px;
    }
  }
`;

export const Button = styled.button`
  background-color: #2f6bdb;
  width: 50%;
  height: 40px;
  font-weight: 500;
  border: none;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;
  letter-spacing: 0.3px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.styles.font.small};
  border-radius: ${({ theme }) => theme.styles.spacing.short};

  position: absolute;

  bottom: 20px;
  right: 20px;
`;
