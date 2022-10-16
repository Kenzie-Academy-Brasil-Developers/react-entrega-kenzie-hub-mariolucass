import * as yup from "yup";

export const techsSchema = yup.object().shape({
  title: yup.string().required("Tech obrigatória"),

  status: yup.string().required("Status obrigatório."),
});
