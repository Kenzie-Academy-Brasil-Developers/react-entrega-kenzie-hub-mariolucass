import { ButtonPrimario } from "./styles";

const Button = ({ tipo, texto, type, onClick }) => (
  <ButtonPrimario type={type} tipo={tipo} onClick={onClick}>
    {texto}
  </ButtonPrimario>
);

export default Button;
