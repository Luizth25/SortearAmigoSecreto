import styled from "styled-components";

export const StyledButton = styled.button`
  width: 350px;
  height: 80px;
  font-size: 20px;
  box-shadow: 2px 2px 0px 1px #000000;
  border-radius: 45px;
  background-color: #fe652b;
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4b69fd;
  }

  @media (max-width: 800px) {
    width: 220px;
    margin: 32px 0;
  }
`;

// export const StyledButton = styled.button`
//   border-top-right-radius: 45px;
//   border-bottom-right-radius: 45px;
//   height: 82px;
//   width: 30%;
//   box-sizing: border-box;
//   border: 2px solid black;
//   font-size: 20px;
//   color: #000000;
//   box-shadow: 2px 2px 0px 1px #000000;
//   cursor: pointer;
//   background-color: #c4c4c4;

//   &:hover {
//     opacity: 0.8;
//   }

//   &:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//   }
//   @media (max-width: 800px) {
//     display: block;
//     margin-top: 16px;
//     margin: 0 auto;
//     width: 220px;
//     border-radius: 45px;
//   }
// `;
