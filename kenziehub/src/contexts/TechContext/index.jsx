import { createContext, useState } from "react";
import { apiHeader } from "../../services/axios";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const CreateTechs = (data) => {
    try {
      const response = apiHeader.post(`/users/techs`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteTechs = (id) => {
    try {
      const response = apiHeader.delete(`/users/techs/${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider value={(DeleteTechs, CreateTechs)}>
      {children}
    </TechContext.Provider>
  );
};
