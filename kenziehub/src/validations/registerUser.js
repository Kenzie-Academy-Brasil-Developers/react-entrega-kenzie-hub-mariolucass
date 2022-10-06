import * as yup from "yup";

export const registerSchema = yup.object().shape({
  nome: yup.string().required("Email obrigatório"),

  email: yup.string().email().required("Email obrigatório"),

  password: yup
    .string()
    // .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    // .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
    // .matches(/[\d]/, "Deve conter ao menos um número")
    // .matches(/(\W) | _ /, "Deve conter ao menos um caracter especial")
    .required("Senha obrigatória."),

  confirmPass: yup.string().required("Email obrigatório"),

  bio: yup.string().required("Email obrigatório"),

  contact: yup.string().required("Email obrigatório"),
});
