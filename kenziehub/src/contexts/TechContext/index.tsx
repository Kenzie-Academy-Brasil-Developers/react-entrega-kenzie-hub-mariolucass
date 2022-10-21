import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { apiHeader } from "../../services/axios";
import { UseUserContext } from "../UserContext";

export const TechContext = createContext<ITechContext>({} as ITechContext);

interface ITechProviderProps {
  children: ReactNode;
}

interface ITechContext {
  CreateTechs: (data: string) => void;
  DeleteTechs: (data: string) => void;
  EditTechs: (id: string, data: string) => void;
  setModal: (arg0: boolean) => void;
  isFiltered: boolean;
  modal: boolean;
}

export const TechProvider = ({ children }: ITechProviderProps) => {
  const { techs } = UseUserContext();
  const [modal, setModal] = useState<boolean>(false);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [listNew, setListNew] = useState(techs);

  const CreateTechs = async (data: string) => {
    try {
      const response = await apiHeader.post(`/users/techs`, data);
      setListNew([...techs, response.data]);
      setIsFiltered(true);
    } catch (error) {
      toast.error(error);
    }
  };

  const DeleteTechs = async (id: string) => {
    try {
      await apiHeader.delete(`/users/techs/${id}`);
      setListNew(techs.filter((e) => e.id !== id));
      setIsFiltered(true);
    } catch (error) {
      toast.error(error);
    }
  };

  const EditTechs = async (id: string, data: string) => {
    try {
      const response = await apiHeader.put(`/users/techs/${id}`, data);
      setIsFiltered(true);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        DeleteTechs,
        CreateTechs,
        EditTechs,
        setModal,
        modal,
        isFiltered,
        listNew,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const UseTechContext = () => {
  return useContext(TechContext);
};
