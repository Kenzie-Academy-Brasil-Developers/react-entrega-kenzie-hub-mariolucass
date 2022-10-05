import { ButtonPrimario } from "./styles";

const Button = ({ tipo, texto, type }) => {
  return (
    <ButtonPrimario type={type} tipo={tipo}>
      {texto}
    </ButtonPrimario>
  );
};

export default Button;
