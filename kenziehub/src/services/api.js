import { api, apiHeader } from "./axios";

export const LoginApi = (data) => {
  api
    .post("/sessions", data)
    .then((res) => {
      localStorage.setItem("token:KenzieHub", res.data.token);
      localStorage.setItem("id:KenzieHub", res.data.user.id);
    })
    .catch((err) => messageError(err.response));
};

export const RegisterApi = (data) => {
  api
    .post("/users", data)
    .then((res) => {
      messageSucess(res.data);
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
  console.log(message);
};

const messageSucess = (message) => {
  console.log(message);
};
