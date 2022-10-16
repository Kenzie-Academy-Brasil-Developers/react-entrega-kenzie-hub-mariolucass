import { SelectStyled, LabelStyled } from "./styles";

const Select = ({ text, array, register, id }) => {
  const opcoes = array.map((e) => {
    return (
      <option value={e.name} key={e.id}>
        {e.name}
      </option>
    );
  });

  return (
    <LabelStyled>
      {text}
      <SelectStyled {...register(id)}>{opcoes}</SelectStyled>
    </LabelStyled>
  );
};

export default Select;

