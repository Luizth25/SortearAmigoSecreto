import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin:0px;
  padding: 0px;
  box-sizing:border-box;
  list-style:none;
  font-family: "Poppins" , sans-serif;
}
body{
  background-color: #4b69fd;

}
section {
  width: 100%;
  text-align: center;
  max-width: 900px;
}

h2 {
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 36px;
  color: #4B69FD;
}

ul li {
  font-size: 18px;
  font-weight: 300;
  margin: 8px 0;
}

`;
export default GlobalStyles;
