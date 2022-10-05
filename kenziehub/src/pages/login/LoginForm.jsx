import Input from "../../components/Inputs";
import { FormLogin } from "./styles";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <FormLogin
      action=""
      onSubmit={() => {
        handleSubmit(handleLogin());
      }}
    >
      <h4>Login</h4>

      <Input
        type="e-mail"
        placeholder="Digite aqui seu e-mail"
        text={"E-mail"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <Input
        type="password"
        placeholder="Digite aqui sua senha"
        text={"Senha"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button type="submit" tipo={1} texto="Entrar" />
      <span>Ainda não possui uma conta? </span>

      <Link to="/register">
        <Button tipo={2} texto="Cadastre-se" />
      </Link>
    </FormLogin>
  );
};

export default LoginForm;
