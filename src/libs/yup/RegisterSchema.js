import * as yup from 'yup'

const RegisterSchema = yup
  .object({
    nombre_cli: yup
      .string()
      .required('Ups! Necesitamos tu nombre para continuar')
      .min(2, 'Debes escribir al menos 2 caracteres')
      .max(30, 'Debes escribir menos de 30 carcteres'),

    correo_usu: yup
      .string()
      .email('Debes escribir un correo valido')
      .required('Ups! Necesitamos tu correo para continuar'),

    contrasena_usu: yup
      .string()
      .required('Ups! Necesitamos que pongas una contraseña')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .matches(/[0-9]/, 'La contraseña debe tener al menos un numero')
      .matches(
        /[a-zñ]/,
        'La contraseña debe tener al menos una letra en minuscula'
      )
      .matches(
        /[A-ZÑ]/,
        'La contraseña debe tener al menos una letra en mayucula'
      )
      .matches(/[^\w]/, 'La contraseña debe tener al menos un simbolo')
      .max(44, 'Debes escribir menos de 45 carcteres'),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('contrasena_usu'), null], 'Las contraseñas no coinciden')
      .required('Ups! Necesitamos que llenes los campos'),

    telefono_cli: yup
      .string()
      .required('Ups! Necesitamos tu telefono para continuar')
      .min(10, 'Debes escribir al menos 10 caracteres')
      .max(10, 'Debes escribir menos de 10 carcteres'),

    direccion_cli: yup
      .string()
      .required('Ups! Necesitamos tu direccion para continuar')
      .min(2, 'Debes escribir al menos 2 caracteres')
      .max(30, 'Debes escribir menos de 30 carcteres')
  })
  .required('Ups! Necesitamos que llenes los campos')

export default RegisterSchema
