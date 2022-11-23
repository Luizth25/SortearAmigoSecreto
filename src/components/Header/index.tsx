import logo from "image/logo.png";
import participante from "image/participante.png";

import { HeaderContainer, ContainerImage } from "./style";

const Header = () => (
  <HeaderContainer>
    <div>
      <img src={logo} alt="Logo" />
    </div>
    <ContainerImage>
      <img src={participante} alt="Participante" />
    </ContainerImage>
  </HeaderContainer>
);

export default Header;
