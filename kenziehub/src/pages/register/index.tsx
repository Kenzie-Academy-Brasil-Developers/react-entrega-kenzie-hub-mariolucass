import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import { RegisterContainer } from "./styles";

const Register = () => (
  <RegisterContainer>
    <div className="header__form">
      <h1>Kenzie Hub</h1>

      <Link to="/" className="Link">
        Voltar
      </Link>
    </div>

    <RegisterForm></RegisterForm>
  </RegisterContainer>
);

export default Register;
