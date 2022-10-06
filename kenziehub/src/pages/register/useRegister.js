import { RegisterApi } from "../../services/api";

export const useRegister = (data) => {
  const dataApi = {
    email: data.email,
    password: data.password,
    name: data.name,
    bio: data.bio,
    contact: data.contact,
    course_module: data.modulo,
  };

  RegisterApi(dataApi);
};

//  TESTE

//     email: data.email,
//     password: data.password,
//     name: data.name,
//     bio: data.bio,
//     contact: data.contact,
//     course_module: data.modulo,
