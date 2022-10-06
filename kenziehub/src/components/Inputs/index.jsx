import { InputStyled, LabelStyled } from "./styles";

const Input = ({ type, placeholder, text, id, register }) => {
  return (
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
};

export default Input;
