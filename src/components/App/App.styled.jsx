import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;

  @media screen and (max-width: 440px) {
    max-width: 100%;
  }

  height: 100vh;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 80px;

  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;

  font-family: 'Montserrat', sans-serif;
  color: #010101;

  box-sizing: border-box;
`;
