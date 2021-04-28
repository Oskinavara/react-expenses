import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto;
    background: #777;
  }

  input,button {
    background: transparent;
    border: 0;

    &:focus {
      outline: 0;
    }
  }
`;

export default GlobalStyle;
