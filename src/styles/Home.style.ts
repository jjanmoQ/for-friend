import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 20px 0;
  background: #e3eeff;
`;
export const Title = styled.h1`
  font-size: 24px;
  text-align: center;

  background: linear-gradient(
    90.31deg,
    rgb(41, 89, 255) -1.39%,
    rgb(97, 208, 215) 79.16%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;

  .allen {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .schoollive {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 14px;
    }
  }
  img {
    margin-left: 14px;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1200px) {
    font-size: 40px;
  }
`;

export const GridContainer = styled.div`
  width: 80%;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    justify-content: center;
  }
`;

export const Item = styled.div`
  width: 480px;
  height: 320px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffecf2;
  border-radius: 10px;
`;
