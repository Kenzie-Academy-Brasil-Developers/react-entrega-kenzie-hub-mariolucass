import { ButtonPrimario } from "./styles";

interface IButtons {
  kind: number;
  text: string;
  type: string;
  onClick: () => void;
}

const Button = ({ kind, text, type, onClick }: IButtons) =>
  type === "button" ? (
    <ButtonPrimario type="button" kind={kind} onClick={onClick}>
      {text}
    </ButtonPrimario>
  ) : (
    <ButtonPrimario type="submit" kind={kind} onClick={onClick}>
      {text}
    </ButtonPrimario>
  );

export default Button;
