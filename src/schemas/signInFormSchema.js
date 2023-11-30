import * as yup from "yup";

export default yup.object().shape({
  email: yup
    .string()
    .required("Enter your e-mail")
    .email("Invalid e-mail format"),
  password: yup.string().required("Provide a password"),
});
