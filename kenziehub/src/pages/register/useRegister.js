import { RegisterApi } from "../../services/api";

export const useRegister = (data) => {
  console.log(data);
  const dataApi = {
    email: data.email,
    password: data.password,
    name: data.nome,
    bio: data.bio,
    contact: data.contact,
    course_module: data.courseModule,
  };
  console.log(dataApi);

  RegisterApi(dataApi);
};

//  TESTE

//     email: mario@kenzie.com,
//     password: Teste123.,
//     name: Mario ,
//     bio: Estudante dedicado,
//     contact: https://www.linkedin.com/in/mariolucass/,
//     course_module: data.modulo,
