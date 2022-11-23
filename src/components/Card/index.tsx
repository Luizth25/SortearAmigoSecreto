import { TCardProps } from "./types";
import { CardStyled } from "./style";

const Card = ({ children }: TCardProps) => {
  return <CardStyled>{children}</CardStyled>;
};

export default Card;
