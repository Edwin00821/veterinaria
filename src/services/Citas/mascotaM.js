import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const MascotaMService = {
  list: async () => {
    try {
      const ResUsuario = await axios.get(
        `${BASE_URL_API}/maestra/mascotaM`,
        axiosConfig
      )

      return axiosSuccess(ResUsuario, 'MascotaMService.getAll')
    } catch (error) {
      return axiosError(error, 'MascotaMService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResUsuario = await axios.get(
        `${BASE_URL_API}/maestra/mascotaM/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResUsuario, 'MascotaMService.getAll')
    } catch (error) {
      return axiosError(error, 'MascotaMService.getOneById')
    }
  },

  create: async ({
    id_cli,
    nombre_mas,
    fechaNac_mas,
    urlFoto_mas,
    id_raz,
    id_sex,
    id_col
  }) => {
    try {
      const ResUsuario = await axios.post(
        `${BASE_URL_API}/maestra/mascotaM`,
        {
          id_cli,
          nombre_mas,
          fechaNac_mas,
          urlFoto_mas,
          id_raz,
          id_sex,
          id_col
        },
        axiosConfig
      )

      return axiosSuccess(ResUsuario, 'MascotaMService.create')
    } catch (error) {
      return axiosError(error, 'MascotaMService')
    }
  },

  update: async ({
    id_cli,
    nombre_mas,
    fechaNac_mas,
    urlFoto_mas,
    id_raz,
    id_sex,
    id_col
  }) => {
    try {
      const ResUsuario = await axios.put(
        `${BASE_URL_API}/maestra/mascotaM`,
        {
          id_cli,
          nombre_mas,
          fechaNac_mas,
          urlFoto_mas,
          id_raz,
          id_sex,
          id_col
        },
        axiosConfig
      )
      return axiosSuccess(ResUsuario, 'MascotaMService.update')
    } catch (error) {
      return axiosError(error, 'MascotaMService')
    }
  },

  delete: async (id) => {
    try {
      const ResUsuario = await axios.delete(
        `${BASE_URL_API}/maestra/mascotaM/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResUsuario, 'MascotaMService.delete')
    } catch (error) {
      return axiosError(error, 'MascotaMService')
    }
  }
}
