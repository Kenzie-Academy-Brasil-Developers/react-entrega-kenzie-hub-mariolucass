import axios, { AxiosError } from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserLogin } from "../../pages/login/LoginForm";
import { IUserRegister } from "../../pages/register/RegisterForm";
import { api, apiHeader } from "../../services/axios";

export const UserContext = createContext<IUserContext>({} as IUserContext);

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserResponse {
  name: string;
  course_module: string;
}

export interface IUserTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface IUserContext {
  setTechs: React.Dispatch<React.SetStateAction<IUserTechs[]>>;
  RegisterApi: (data: IUserRegister) => void;
  LoginApi: (data: IUserLogin) => void;
  nameUser: string;
  categoryUser: string;
  techs: IUserTechs[];
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const [nameUser, setNameUser] = useState<string>("");
  const [categoryUser, setCategoryUser] = useState<string>("");
  const [techs, setTechs] = useState<IUserTechs[]>([]);

  const setUser = (data: IUserResponse) => {
    setNameUser(data.name);
    setCategoryUser(data.course_module);
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token:KenzieHub");
      if (token) {
        try {
          const response = await apiHeader.get("/profile");
          setUser(response.data);
          setTechs(response.data.techs);
          navigate("/dashboard");
        } catch (error) {
          toast.error("Por favor, faca o login novamente.");
          localStorage.removeItem("token:KenzieHub");
          navigate("/");
        }
      } else {
        navigate("/");
      }
    };
    loadUser();
    /* eslint-disable */
  }, []);

  const LoginApi = async (data: IUserLogin) => {
    try {
      const response = await api.post("/sessions", data);
      const token = response.data.token;
      localStorage.setItem("token:KenzieHub", token);
      setUser(response.data.user);
      setTechs(response.data.user.techs);
      toast.success("Login efetuado com sucesso.");
      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error((error.response?.data as AxiosError).message);
      } else {
        console.log(error);
      }
    }
  };

  const RegisterApi = async (data: IUserRegister) => {
    try {
      await api.post("/users", data);
      toast.success("Registro efetuado com sucesso.");
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error((error.response?.data as AxiosError).message);
      } else {
        console.log(error);
      }
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

export const UseUserContext = () => {
  return useContext(UserContext);
};
