import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;
`;
export const Title = styled.h1`
  font-size: 40px;
  color: #fd5f7c;
  text-align: center;
`;

export const GridContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  justify-content: center;
  gap: 20px;
  grid-template-columns: auto auto auto;
  padding: 10px;
`;

export const Item = styled.div`
  width: 320px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffecf2;
  border-radius: 10px;
`;
