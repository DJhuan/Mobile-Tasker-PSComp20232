import * as yup from "yup";

export default yup.object().shape({
  fullName: yup.string().required("Your name is required"),
  email: yup
    .string()
    .required("The e-mail is required")
    .email("Invalid e-mail format"),
  password: yup.string().required("A password is mandatory"),
});
