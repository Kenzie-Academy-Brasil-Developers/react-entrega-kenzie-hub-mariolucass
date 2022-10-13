import Button from "../../components/Buttons";
import Input from "../../components/Inputs";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/loginUser";

import { FormLogin } from "./styles";

import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/axios";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();

  const LoginApi = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        toast.success("Login efetuado com sucesso.");
        localStorage.setItem("token:KenzieHub", res.data.token);
        localStorage.setItem("id:KenzieHub", res.data.user.id);
        console.log("teste");
        navigate("/dashboard");
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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

      <Button type="submit" tipo={1} texto="Entrar" />
      <span>Ainda não possui uma conta? </span>

      <Link to="/register" className="Link">
        Cadastre-se
      </Link>
    </FormLogin>
  );
};

export default LoginForm;
