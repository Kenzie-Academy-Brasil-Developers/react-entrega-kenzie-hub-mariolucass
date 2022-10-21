import { InputStyled, LabelStyled } from "./styles";

interface IInputs {
  type: string;
  placeholder: string;
  text: string;
  id: string;
  register: (id: string) => void;
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
