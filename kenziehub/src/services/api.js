import { api, apiHeader } from "./axios";

export const LoginApi = (data) => {
  api
    .post("/sessions", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const RegisterApi = (data) => {
  api
    .post("/users", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const GetUserApi = (data) => {
  apiHeader
    .get("/profile")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
