import { ButtonPrimario, ButtonSecundario } from "./styles";

const Button = ({ tipo, texto, type }) => {
  return tipo === 1 ? (
    <ButtonPrimario type={type}>{texto}</ButtonPrimario>
  ) : (
    <ButtonSecundario type={type}>{texto}</ButtonSecundario>
  );
};

export default Button;
