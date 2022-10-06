import Button from "../../components/Buttons";
import Input from "../../components/Inputs";
import Select from "../../components/Selects";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/registerUser";

import { FormRegister } from "./styles";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegister } from "./useRegister";

const RegisterForm = () => {
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

  errors.email?.message && toast.error("oi", { limit: 1 });

  return (
    <FormRegister action="" onSubmit={handleSubmit(useRegister)}>
      <h3>Register</h3>

      <Input
        id="nome"
        type="text"
        placeholder={"Digite aqui seu nome"}
        text={"Nome"}
        register={register}
      />

      <Input
        id="email"
        type="text"
        placeholder={"Digite aqui seu e-mail"}
        text={"Email"}
        register={register}
      />

      <Input
        id="password"
        type="password"
        placeholder={"Digite aqui sua senha"}
        text={"Senha"}
        register={register}
      />

      <Input
        id="confirmPass"
        type="text"
        placeholder={"Digite novamente sua senha"}
        text={"Confirmar senha"}
        register={register}
      />

      <Input
        id="bio"
        type="text"
        placeholder={"Fale sobre você"}
        text={"Bio"}
        register={register}
      />

      <Input
        id="contact"
        type="text"
        placeholder={"Opção de contato"}
        text={"Contato"}
        register={register}
      />

      <Select
        name=""
        id="courseModule"
        text={"Selecionar módulo"}
        array={arrayOptions}
        register={register}
      ></Select>

      <Button type="submit" texto="Cadastrar" tipo={2} />
    </FormRegister>
  );
};

export default RegisterForm;
