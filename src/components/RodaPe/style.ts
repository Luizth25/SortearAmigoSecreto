import styled from "styled-components";

export const FooterConfig = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;

    img {
      margin-top: 32px;
    }
  }
`;
