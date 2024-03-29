import { InputStyled, LabelStyled } from "./styles";
import { UseFormRegister } from "react-hook-form";
import { IUserLogin } from "../../pages/login/LoginForm";

interface IInputs {
  type: string;
  placeholder: string;
  text: string;
  id: "email" | "password";
  register: UseFormRegister<IUserLogin>;
}

const Input = ({ type, placeholder, text, id, register }: IInputs) => (
  <>
    <LabelStyled htmlFor={id}>
      {text}
      <InputStyled
        placeholder={placeholder}
        type={type}
        id={id}
        {...register(id)}
      ></InputStyled>
    </LabelStyled>
  </>
);

export default Input;
