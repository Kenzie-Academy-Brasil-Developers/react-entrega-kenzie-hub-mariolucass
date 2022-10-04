import { InputStyled, LabelStyled } from "./styles";

const Input = ({ type, placeholder, text }) => {
  return (
    <>
      <LabelStyled htmlFor="">{text}</LabelStyled>
      <InputStyled placeholder={placeholder} type={type}></InputStyled>
    </>
  );
};

export default Input;
