import Button from "../../components/Buttons";
import Input from "../../components/Inputs";
import Select from "../../components/Selects";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/registerUser";

import { FormRegister } from "./styles";

import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const RegisterForm = () => {
  const { RegisterApi } = useContext(UserContext);

  const arrayOptions = [
    { name: "Primeiro Módulo", id: 1 },
    { name: "Segundo Módulo", id: 2 },
    { name: "Terceiro Módulo", id: 3 },
    { name: "Quarto Módulo", id: 4 },
    { name: "Quinto Módulo", id: 5 },
    { name: "Sexto Módulo", id: 6 },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <FormRegister onSubmit={handleSubmit(RegisterApi)}>
      <h3>Crie sua conta</h3>
      <span>Rapido e gratis vamos nessa.</span>

      <Input
        id="nome"
        type="text"
        placeholder={"Digite aqui seu nome"}
        text={"Nome"}
        register={register}
      />
      <span>{errors.nome?.message}</span>

      <Input
        id="email"
        type="text"
        placeholder={"Digite aqui seu e-mail"}
        text={"Email"}
        register={register}
      />
      <span>{errors.email?.message}</span>

      <Input
        id="password"
        type="password"
        placeholder={"Digite aqui sua senha"}
        text={"Senha"}
        register={register}
      />
      <span>{errors.password?.message}</span>

      <Input
        id="confirmPass"
        type="text"
        placeholder={"Digite novamente sua senha"}
        text={"Confirmar senha"}
        register={register}
      />
      <span>{errors.confirmPass?.message}</span>

      <Input
        id="bio"
        type="text"
        placeholder={"Fale sobre você"}
        text={"Bio"}
        register={register}
      />
      <span>{errors.bio?.message}</span>

      <Input
        id="contact"
        type="text"
        placeholder={"Opção de contato"}
        text={"Contato"}
        register={register}
      />
      <span>{errors.contact?.message}</span>

      <Select
        name=""
        id="courseModule"
        text={"Selecionar módulo"}
        array={arrayOptions}
        register={register}
      ></Select>
      <span>{errors.courseModule?.message}</span>

      <Button type="submit" texto="Cadastrar" tipo={2} />
    </FormRegister>
  );
};

export default RegisterForm;
