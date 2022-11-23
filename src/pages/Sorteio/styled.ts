import styled from "styled-components";

export const Sorteio = styled.select`
  border-radius: 45px;
  height: 82px;
  width: 70%;
  box-sizing: border-box;
  padding: 0 32px;
  font-size: 20px;
  border: 2px solid black;
  box-shadow: 0px 2px 0px 1px #000000;

  &:focus {
    outline: none;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Resultado = styled.p`
  color: #fe652bfc;
  font-size: 25px;
`;

export const SorteioFooter = styled.footer`
  margin: 64px 0;
`;

export const StyledP = styled.p`
  font-size: 20px;
  font-weight: 200;
  margin: 32px 0;
`;
