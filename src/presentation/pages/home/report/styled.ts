import styled from 'styled-components';

export const GraphicContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  height: 300px;

  position: relative;
  padding: 20px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.styles.colors.black.opacity};
  border-radius: ${({ theme }) => theme.styles.spacing.base};

  display: flex;
  flex-direction: column;

  align-items: flex-end;
  justify-content: space-between;

  h1 {
    width: 100%;
    font-size: ${({ theme }) => theme.styles.font.default};
    font-weight: 800;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.styles.colors.blue.bold};
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

  font-size: ${({ theme }) => theme.styles.font.default};
  border-radius: ${({ theme }) => theme.styles.spacing.short};
`;
