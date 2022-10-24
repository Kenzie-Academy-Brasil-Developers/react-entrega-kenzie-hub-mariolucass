import { InputStyled, LabelStyled } from "./styles";
import { UseFormRegister } from "react-hook-form";
import { IUserCreateTech } from "../Modal";

interface IInputs {
  type: string;
  placeholder: string;
  text: string;
  id: "title" | "status";
  register: UseFormRegister<IUserCreateTech>;
}

const InputCreateTech = ({
  type,
  placeholder,
  text,
  id,
  register,
}: IInputs) => (
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

export default InputCreateTech;
