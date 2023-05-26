import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const VeterinariaMService = {
  list: async () => {
    try {
      const ResVeterinaria = await axios.get(
        `${BASE_URL_API}/maestra/veterinariaM`,
        axiosConfig
      )

      return axiosSuccess(ResVeterinaria, 'VeterinariaMService.getAll')
    } catch (error) {
      return axiosError(error, 'VeterinariaMService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResVeterinaria = await axios.get(
        `${BASE_URL_API}/maestra/veterinariaM/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResVeterinaria, 'VeterinariaMService.getAll')
    } catch (error) {
      return axiosError(error, 'VeterinariaMService.getOneById')
    }
  },

  create: async ({ correo_usu, contrasena_usu, id_rol }) => {
    try {
      console.log({ correo_usu, contrasena_usu, id_rol })
      const ResVeterinaria = await axios.post(
        `${BASE_URL_API}/maestra/veterinariaM`,
        { correo_usu, contrasena_usu, id_rol },
        axiosConfig
      )

      console.log({ ResVeterinaria })

      return axiosSuccess(ResVeterinaria, 'VeterinariaMService.create')
    } catch (error) {
      return axiosError(error, 'VeterinariaMService')
    }
  },

  update: async ({ correo_usu, contrasena_usu, id_rol }) => {
    try {
      const ResVeterinaria = await axios.put(
        `${BASE_URL_API}/maestra/veterinariaM`,
        { correo_usu, contrasena_usu, id_rol },
        axiosConfig
      )
      return axiosSuccess(ResVeterinaria, 'VeterinariaMService.update')
    } catch (error) {
      return axiosError(error, 'VeterinariaMService')
    }
  },

  delete: async (id) => {
    try {
      const ResVeterinaria = await axios.delete(
        `${BASE_URL_API}/maestra/veterinariaM/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResVeterinaria, 'VeterinariaMService.delete')
    } catch (error) {
      return axiosError(error, 'VeterinariaMService')
    }
  }
}
