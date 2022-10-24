import Button from "../../components/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/registerUser";
import { FormRegister } from "./styles";
import { UseUserContext } from "../../contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";
import InputRegister from "../../components/InputsRegister";
import SelectRegister from "../../components/Selects";

export interface IUserRegister {
  email: string;
  password: string;
  confirmPass: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

const RegisterForm = () => {
  const { RegisterApi } = UseUserContext();

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
  } = useForm<IUserRegister>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <FormRegister onSubmit={handleSubmit(RegisterApi)}>
      <h3>Crie sua conta</h3>
      <span>Rapido e gratis vamos nessa.</span>

      <InputRegister
        id="name"
        type="text"
        placeholder={"Digite aqui seu nome"}
        text={"Nome"}
        register={register}
      />
      <span>{errors.name?.message}</span>

      <InputRegister
        id="email"
        type="text"
        placeholder={"Digite aqui seu e-mail"}
        text={"Email"}
        register={register}
      />
      <span>{errors.email?.message}</span>

      <InputRegister
        id="password"
        type="password"
        placeholder={"Digite aqui sua senha"}
        text={"Senha"}
        register={register}
      />
      <span>{errors.password?.message}</span>

      <InputRegister
        id="confirmPass"
        type="password"
        placeholder={"Digite novamente sua senha"}
        text={"Confirmar senha"}
        register={register}
      />
      <span>{errors.confirmPass?.message}</span>

      <InputRegister
        id="bio"
        type="text"
        placeholder={"Fale sobre você"}
        text={"Bio"}
        register={register}
      />
      <span>{errors.bio?.message}</span>

      <InputRegister
        id="contact"
        type="text"
        placeholder={"Opção de contato"}
        text={"Contato"}
        register={register}
      />
      <span>{errors.contact?.message}</span>

      <SelectRegister
        id="course_module"
        text={"Selecionar módulo"}
        array={arrayOptions}
        register={register}
      />

      <span>{errors.course_module?.message}</span>

      <Button type="submit" text="Cadastrar" kind={2} onClick={() => {}} />
    </FormRegister>
  );
};

export default RegisterForm;
