import { ButtonPrimario } from "./styles";

interface IButtons {
  kind: number;
  text: string;
  type: string;
  onClick: () => void;
}

const Button = ({ kind, text, type, onClick }: IButtons) => (
  <ButtonPrimario type={type} kind={kind} onClick={onClick}>
    {text}
  </ButtonPrimario>
);

export default Button;
