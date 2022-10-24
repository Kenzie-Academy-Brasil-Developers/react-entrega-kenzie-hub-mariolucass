import { InputStyled, LabelStyled } from "./styles";
import { UseFormRegister } from "react-hook-form";
import { IUserRegister } from "../../pages/register/RegisterForm";

interface IInputs {
  type: string;
  placeholder: string;
  text: string;
  id: any;
  register: UseFormRegister<IUserRegister>;
}

const InputRegister = ({ type, placeholder, text, id, register }: IInputs) => (
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

export default InputRegister;
