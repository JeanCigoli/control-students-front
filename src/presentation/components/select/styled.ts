import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 35px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  svg {
    position: absolute;
    font-size: ${({ theme }) => theme.styles.font.medium};
    right: 10px;
    bottom: 10px;
    color: ${({ theme }) => theme.styles.colors.blue.medium};
  }
`;

export const Select = styled.select<{ error: boolean }>`
  width: 100%;

  min-height: 40px;
  height: 6.5vh;
  max-height: auto;

  outline: none;
  transition: all 0.3s;
  background-color: transparent;

  color: ${({ theme }) => theme.styles.colors.white.normal};

  font-size: ${({ theme }) => theme.styles.font.small};
  padding-left: ${({ theme }) => theme.styles.spacing.short};

  border-radius: ${({ theme }) => theme.styles.spacing.short};
  border: ${({ error, theme }) => {
    if (error) {
      return `1.5px solid ${theme.styles.colors.red.medium}`;
    }

    return `1.5px solid ${theme.styles.colors.gray.light}`;
  }};

  :focus {
    border: 1.5px solid ${({ theme }) => theme.styles.colors.blue.bold};
  }

  option {
    background-color: ${({ theme }) => theme.styles.colors.black.normal};
  }
`;

export const Error = styled.p`
  position: absolute;
  bottom: -22px;
  color: ${({ theme }) => theme.styles.colors.red.medium};
  font-size: ${({ theme }) => theme.styles.font.small};
`;
