import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api, apiHeader } from "../../services/axios";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [nameUser, setNameUser] = useState("");
  const [categoryUser, setCategoryUser] = useState("");
  const [techs, setTechs] = useState([]);
  const [render, setRender] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token:KenzieHub");

      if (token) {
        try {
          const response = await apiHeader.get("/profile");

          setNameUser(response.data.name);
          setCategoryUser(response.data.course_module);
          setTechs(response.data.techs);

          navigate("/dashboard");
        } catch (error) {
          toast.error("Pro favor, faca o login novamente.");
          localStorage.removeItem("token:KenzieHub");
          navigate("/");
        }
      } else {
        navigate("/");
      }
    };

    loadUser();
    /* eslint-disable */
  }, [render]);

  const LoginApi = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      const token = response.data.token;

      localStorage.setItem("token:KenzieHub", token);

      // setNameUser(response.data.user.name);
      // setCategoryUser(response.data.user.course_module);
      // setTechs(response.data.user.techs);

      toast.success("Login efetuado com sucesso.");
      setRender(true);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const RegisterApi = async (data) => {
    try {
      await api.post("/users", data);
      toast.success("Registro efetuado com sucesso.");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        LoginApi,
        RegisterApi,
        nameUser,
        categoryUser,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
