import { StyledButton } from "./styled";
import { TButtonProps } from "./types";

const Button = ({ disabled, text, onClick }: TButtonProps) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {text}
  </StyledButton>
);

export default Button;
