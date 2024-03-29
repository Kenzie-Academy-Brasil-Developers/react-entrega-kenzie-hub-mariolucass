import { SelectStyled, LabelStyled } from "./styles";
import { UseFormRegister } from "react-hook-form";
import { IUserCreateTech } from "../Modal";

interface IUserOptions {
  name: string;
  id: number;
}

interface ISelectProps {
  text: string;
  id: "status";
  array: IUserOptions[];
  register: UseFormRegister<IUserCreateTech>;
}

const SelectCreateTech = ({ text, array, id, register }: ISelectProps) => {
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

export default SelectCreateTech;
