import { createGlobalStyle } from "styled-components";

const GlobalCss = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #007bff;
    color: #333;
  }
`;
export default GlobalCss;
