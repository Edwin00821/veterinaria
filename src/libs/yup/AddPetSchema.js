import * as yup from 'yup'

const YEAR_NOW = new Date().getFullYear()
const YEAR_MIN = YEAR_NOW - 30

const AddPetSchema = yup
  .object({
    nombre_mas: yup
      .string()
      .required('Ups! Necesitamos el nombre para continuar'),

    fechaNac_mas: yup
      .date()
      .typeError('Ups! Debes ingresar una fecha válida')
      .min(
        new Date(YEAR_MIN, 0, 1),
        'Ups! Porfavor ingresa una fecha de nacimiento valida'
      )
      .max(
        new Date(YEAR_NOW, 11, 31),
        'Ups! Porfavor ingresa una fecha de nacimiento valida'
      )
      .required('Ups! Necesitamos tu fecha de nacimiento para continuar'),

    urlFoto_mas: yup
      .object()
      .shape({
        file: yup.mixed()
      })
      .test(
        'required',
        'Ups! Necesitamos que ingreses una imagen',
        ({ file }) => file
      )
      .required('Ups! Necesitamos que pongas una contraseña'),

    color: yup
      .object({
        id: yup.number().typeError('Last name is a required field').required(),
        name: yup.string().typeError('Last name is a required field').required()
      })
      .test(
        'required',
        'Ups! Necesitamos que escojas un color',
        ({ id, name }) => id && name
      )
      .required('Ups! Necesitamos que escojas un color'),

    sexo: yup
      .object({
        id: yup.number().required(),
        name: yup.string().required()
      })
      .test(
        'required',
        'Ups! Necesitamos que escojas un sexo',
        ({ id, name }) => id && name
      )
      .required(),

    especie: yup
      .object({
        id: yup.number().required(),
        name: yup.string().required()
      })
      .test(
        'required',
        'Ups! Necesitamos que escojas una especie',
        ({ id, name }) => id && name
      )
      .required(),

    raza: yup
      .object({
        id: yup.number().required(),
        name: yup.string().required()
      })
      .test(
        'required',
        'Ups! Necesitamos que escojas una raza',
        ({ id, name }) => id && name
      )
      .required()
  })
  .required('Ups! Necesitamos que llenes los campos')

export default AddPetSchema
