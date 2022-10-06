import { LabelStyled } from "../Inputs/styles";
import { SelectStyled } from "./styles";

const Select = ({ text, array }) => {
  const opcoes = array.map((elem, i) => {
    return (
      <option value={elem.name} key={elem.id}>
        {elem.name}
      </option>
    );
  });

  return (
    <LabelStyled>
      {text}
      <SelectStyled>{opcoes}</SelectStyled>
    </LabelStyled>
  );
};

export default Select;
