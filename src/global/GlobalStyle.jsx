import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  // web font
  :root{}

  // reset CSS
  ${reset}

`;

export default GlobalStyle;
