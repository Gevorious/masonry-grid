import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset / normalize */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Inter', sans-serif;
    background-color: #f9f9f9;
    color: #111;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  .spinner-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
`;

export default GlobalStyle;
