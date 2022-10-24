import { SelectStyled, LabelStyled } from "./styles";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IUserOptions {
  name: string;
  id: number;
}

interface ISelectProps {
  text: string;
  id: string;
  array: IUserOptions[];
  register: UseFormRegister<FieldValues>;
}

const Select = ({ text, array, id, register }: ISelectProps) => {
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
