import { LoginApi } from "../../services/api";

export const useLogin = (data) => {
  const dataApi = { email: data.email, password: data.password };

  LoginApi(dataApi);
};
