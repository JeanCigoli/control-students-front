import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
`;

export const Form = styled.form`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Paragraph = styled.p`
  line-height: 1.5em;
  letter-spacing: 0.5px;
  text-align: center;
  font-weight: lighter;

  font-size: ${({ theme }) => theme.styles.font.default};
  margin-bottom: 20px;
`;
