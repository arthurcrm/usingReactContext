import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background: rgb(56, 59, 59);
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;
