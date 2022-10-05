import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import RegisterForm from "./RegisterForm";
import { RegisterContainer } from "./styles";

const Register = () => {
  return (
    <RegisterContainer>
      <div className="header__form">
        <h1>Kenzie Hub</h1>

        <Link to="/">
          <Button tipo={3} texto={"Voltar"} />
        </Link>
      </div>

      <RegisterForm></RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
