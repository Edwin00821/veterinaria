import * as yup from 'yup'

const YEAR_NOW = new Date().getFullYear()
// const MONTH_MIN = YEAR_NOW
// const MONTH_MAX = YEAR_NOW + 1
// const DAY_MIN = YEAR_NOW
// const DAY_MAX = YEAR_NOW + 1

const AddDateSchema = yup
  .object({
    mascota: yup
      .object({
        id: yup.number().typeError('Last name is a required field').required(),
        name: yup.string().typeError('Last name is a required field').required()
      })
      .test(
        'required',
        'Ups! Necesitamos que escojas una mascota',
        ({ id, name }) => id && name
      )
      .required('Ups! Necesitamos que escojas un mascota'),

    fecha_exp: yup
      .date()
      .typeError('Ups! Debes ingresar una fecha válida')
      .min(
        new Date(YEAR_NOW, 0, 1),
        'Ups! Porfavor ingresa una fecha de nacimiento valida'
      )
      .max(
        new Date(YEAR_NOW, 11, 31),
        'Ups! Porfavor ingresa una fecha de nacimiento valida'
      )
      .required('Ups! Necesitamos tu fecha de nacimiento para continuar'),
    motivo_exp: yup
      .string()
      .required('Ups! Necesitamos el nombre para continuar'),
    antecedentes_exp: yup
      .string()
      .required('Ups! Necesitamos el nombre para continuar')
  })
  .required('Ups! Necesitamos que llenes los campos')

export default AddDateSchema
