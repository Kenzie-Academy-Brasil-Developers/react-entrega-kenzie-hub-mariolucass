import Button from "../../components/Buttons";
import Input from "../../components/Inputs";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/loginUser";
import { FormLogin } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { UseUserContext } from "../../contexts/UserContext";

export interface IUserLogin {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { LoginApi } = UseUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <FormLogin action="" onSubmit={handleSubmit(LoginApi)}>
      <h3>Login</h3>

      <Input
        id="email"
        type="e-mail"
        placeholder="Digite aqui seu e-mail"
        text={"E-mail"}
        register={register}
      />

      <span>{errors.email?.message}</span>

      <Input
        id="password"
        type="password"
        placeholder="Digite aqui sua senha"
        text={"Senha"}
        register={register}
      />

      <span>{errors.password?.message}</span>

      <Button type="submit" kind={1} text="Entrar" onClick={() => {}} />

      <span>Ainda não possui uma conta? </span>

      <Link to="/register" className="Link">
        Cadastre-se
      </Link>
    </FormLogin>
  );
};

export default LoginForm;
