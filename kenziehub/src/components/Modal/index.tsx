import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UseTechContext } from "../../contexts/TechContext";
import { techsSchema } from "../../validations/techs";
import Button from "../Buttons";
import Input from "../Inputs";
import Select from "../Selects";
import { BackgroundModal } from "./styles";

interface IUserCreateTech {
  title: string;
  status: string;
}

const Modal = () => {
  const { setModal, CreateTechs } = UseTechContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserCreateTech>({
    resolver: yupResolver(techsSchema),
  });

  const statusForTechs = [
    { id: 1, name: "Iniciante" },
    { id: 2, name: "Intermediário" },
    { id: 3, name: "Avançado" },
  ];

  return (
    <BackgroundModal>
      <form
        onSubmit={handleSubmit((data) => {
          setModal(false);
          CreateTechs(data);
        })}
      >
        <div className="headModal">
          <h4>Cadastrar tecnologia</h4>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </button>
        </div>
        <Input
          id="title"
          type="text"
          placeholder={"Digite aqui sua tech."}
          text={"Nome"}
          register={register}
        />

        <span>{errors.title?.message}</span>

        <Select
          id="status"
          array={statusForTechs}
          text={"Selecionar Status"}
          register={register}
        />

        <span>{errors.status?.message}</span>

        <Button type="submit" tipo={1} texto="Cadastrar Tecnologia" />
      </form>
    </BackgroundModal>
  );
};

export default Modal;
