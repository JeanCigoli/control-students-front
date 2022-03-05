import styled from 'styled-components';

export const Container = styled.div<{ active: boolean }>`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border-radius: ${({ theme }) => theme.styles.spacing.base};

  color: ${({ theme, active }) =>
    active
      ? theme.styles.colors.white.normal
      : theme.styles.colors.gray.medium};

  svg {
    font-size: ${({ theme }) => theme.styles.font.large};
  }
`;
