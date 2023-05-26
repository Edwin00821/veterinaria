import * as yup from 'yup'

const LoginSchema = yup
  .object({
    email: yup
      .string()
      .email()
      .required('Ups! Necesitamos tu correo para continuar'),

    password: yup
      .string()
      .required('Ups! Necesitamos que pongas una contraseña')
  })
  .required('Ups! Necesitamos que llenes los campos')

export default LoginSchema
