import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const UsuarioMService = {
  list: async () => {
    try {
      const ResUsuario = await axios.get(
        `${BASE_URL_API}/maestra/usuarioM`,
        axiosConfig
      )

      return axiosSuccess(ResUsuario, 'UsuarioMService.getAll')
    } catch (error) {
      return axiosError(error, 'UsuarioMService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResUsuario = await axios.get(
        `${BASE_URL_API}/maestra/usuarioM/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResUsuario, 'UsuarioMService.getAll')
    } catch (error) {
      return axiosError(error, 'UsuarioMService.getOneById')
    }
  },

  create: async ({ correo_usu, contrasena_usu, id_rol }) => {
    try {
      console.log({ correo_usu, contrasena_usu, id_rol })
      const ResUsuario = await axios.post(
        `${BASE_URL_API}/maestra/usuarioM`,
        { correo_usu, contrasena_usu, id_rol },
        axiosConfig
      )

      console.log({ ResUsuario })

      return axiosSuccess(ResUsuario, 'UsuarioMService.create')
    } catch (error) {
      return axiosError(error, 'UsuarioMService')
    }
  },

  update: async ({ correo_usu, contrasena_usu, id_rol }) => {
    try {
      const ResUsuario = await axios.put(
        `${BASE_URL_API}/maestra/usuarioM`,
        { correo_usu, contrasena_usu, id_rol },
        axiosConfig
      )
      return axiosSuccess(ResUsuario, 'UsuarioMService.update')
    } catch (error) {
      return axiosError(error, 'UsuarioMService')
    }
  },

  delete: async (id) => {
    try {
      const ResUsuario = await axios.delete(
        `${BASE_URL_API}/maestra/usuarioM/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResUsuario, 'UsuarioMService.delete')
    } catch (error) {
      return axiosError(error, 'UsuarioMService')
    }
  }
}
