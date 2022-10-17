import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { apiHeader } from "../../services/axios";
import { UserContext } from "../UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techs } = useContext(UserContext);

  const [modal, setModal] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [listNew, setListNew] = useState(techs);

  const CreateTechs = async (data) => {
    try {
      const response = await apiHeader.post(`/users/techs`, data);
      setListNew([...techs, response.data]);
      setIsFiltered(true);
    } catch (error) {
      toast.error(error);
    }
  };

  const DeleteTechs = async (id) => {
    try {
      await apiHeader.delete(`/users/techs/${id}`);
      setListNew(techs.filter((e) => e.id !== id));
      setIsFiltered(true);
    } catch (error) {
      toast.error(error);
    }
  };

  const EditTechs = async (id, data) => {
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
