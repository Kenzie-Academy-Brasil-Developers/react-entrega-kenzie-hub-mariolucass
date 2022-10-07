import { toast } from "react-toastify";
import { api, apiHeader } from "./axios";

export const LoginApi = (data) => {
  api
    .post("/sessions", data)
    .then((res) => {
      messageSuccess("Login efetuado com sucesso.");
      localStorage.setItem("token:KenzieHub", res.data.token);
      localStorage.setItem("id:KenzieHub", res.data.user.id);
    })
    .catch((err) => toast.error(err.data.message));
};

export const RegisterApi = (data) => {
  api
    .post("/users", data)
    .then((res) => {
      messageSuccess("Registro efetuado com sucesso.");
      return res.data;
    })
    .catch((err) => messageError(err.response.data.message));
};

export const GetUserApi = async () => {
  const user = await apiHeader
    .get("/profile")
    .then((res) => res.data)
    .catch((err) => messageError(err.response.data.message));

  return user;
};

const messageError = (message) => {
  toast.error(message);
};

const messageSuccess = (message) => {
  toast.success(message);
};
