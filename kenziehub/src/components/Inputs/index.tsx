import { InputStyled, LabelStyled } from "./styles";
import { FieldValues, UseFormMethods } from "react-hook-form";

interface IInputs {
  type: string;
  placeholder: string;
  text: string;
  id: string;
  register: UseFormMethods<FieldValues>;
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
