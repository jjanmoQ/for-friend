import styled, { css } from 'styled-components';

export const packageGradient = (defaultColor: string, gradient?: string) =>
  gradient
    ? css`
        background: ${gradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `
    : css`
        color: ${defaultColor};
      `;

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  background: #e3eeff;
`;
export const Title = styled.h1`
  font-size: 40px;
  text-align: center;

  ${packageGradient(
    '#2959FF',
    `linear-gradient(
      90.31deg,
      rgb(41, 89, 255) -1.39%,
      rgb(97, 208, 215) 79.16%
    )`
  )}
  font-weight: 700;
  font-size: 3rem;
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
