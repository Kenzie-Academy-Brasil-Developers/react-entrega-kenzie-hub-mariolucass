import { SelectStyled, LabelStyled } from "./styles";
import { UseFormRegister } from "react-hook-form";
import { IUserRegister } from "../../pages/register/RegisterForm";

interface IUserOptions {
  name: string;
  id: number;
}

interface ISelectProps {
  text: string;
  id: "course_module";
  array: IUserOptions[];
  register: UseFormRegister<IUserRegister>;
}

const SelectRegister = ({ text, array, id, register }: ISelectProps) => {
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

export default SelectRegister;
