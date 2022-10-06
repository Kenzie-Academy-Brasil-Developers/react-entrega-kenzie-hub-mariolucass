import { api, apiHeader } from "./axios";

export const LoginApi = (data) => {
  api
    .post("/sessions", data)
    .then((res) => {
      messageSucess(res);
    })
    .catch((err) => messageError(err.response.data.message));
};

export const RegisterApi = (data) => {
  api
    .post("/users", data)
    .then((res) => {
      messageSucess(res);
    })
    .catch((err) => messageError(err.response.data.message));
};

export const GetUserApi = (data) => {
  apiHeader
    .get("/profile")
    .then((res) => {
      messageSucess(res);
    })
    .catch((err) => messageError(err.response.data.message));
};

const messageError = (message) => {
  console.log(message);
};

const messageSucess = (message) => {
  console.log(message);
};
