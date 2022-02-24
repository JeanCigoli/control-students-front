import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;
`;

export const FiltersContainer = styled.div`
  width: 100%;
  height: calc(100% - 50px);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;
