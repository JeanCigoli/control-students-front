import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
`;

export const Form = styled.form`
  width: 100%;
  height: 90%;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const File = styled.div`
  width: 100%;
  height: 80%;

  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.styles.spacing.base};
  border: 1px dashed ${({ theme }) => theme.styles.colors.gray.medium};
  overflow: hidden;

  label {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 50%;
    height: 50%;
    color: ${({ theme }) => theme.styles.colors.gray.medium};
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }

  input {
    display: none;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.5em;
  letter-spacing: 0.5px;
  text-align: center;
  font-weight: lighter;

  font-size: ${({ theme }) => theme.styles.font.default};
`;
