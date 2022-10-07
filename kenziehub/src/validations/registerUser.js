import * as yup from "yup";

export const registerSchema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório."),

  email: yup.string().email().required("Email obrigatório."),

  password: yup
    .string()
    .min(8, "Deve conter ao menos oito numeros.")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula.")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula.")
    .matches(/[\d]/, "Deve conter ao menos um número.")
    .matches(/(\W)|_ /, "Deve conter ao menos um caracter especial.")
    .required("Senha obrigatória."),

  confirmPass: yup
    .string()
    .required("Por favor confirme sua senha.")
    .oneOf([yup.ref("password"), null], "Senhas nao condizem."),

  bio: yup.string().required("Bio obrigatória."),

  contact: yup.string().required("Contato obrigatorio."),

  courseModule: yup.string().required("Curso obrigatorio."),
});
