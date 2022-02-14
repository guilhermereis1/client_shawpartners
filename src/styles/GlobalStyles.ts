import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 20px;
    /* font-family: 'Raleway', sans-serif; */
    font-weight: 300;
  }
  html, body, #root{
    height: 100%;
    background-color: #f7f7f7;
  }
  a {
    all: unset;
  }
  *, button, input, select{
    border: 0;
    outline: 0;
    /* font-family: 'Raleway', sans-serif; */
    font-size: 16px
  }
  button {
    cursor: pointer;
  }
`;
