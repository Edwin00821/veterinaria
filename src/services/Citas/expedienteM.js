import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const ExpedienteMService = {
  list: async () => {
    try {
      const ResExpediente = await axios.get(
        `${BASE_URL_API}/maestra/expedienteM`,
        axiosConfig
      )

      return axiosSuccess(ResExpediente, 'ExpedienteMService.getAll')
    } catch (error) {
      return axiosError(error, 'ExpedienteMService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResExpediente = await axios.get(
        `${BASE_URL_API}/maestra/expedienteM/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResExpediente, 'ExpedienteMService.getAll')
    } catch (error) {
      return axiosError(error, 'ExpedienteMService.getOneById')
    }
  },

  create: async ({
    id_mas,
    id_estexp,
    motivo_exp,
    diagnostico_exp,
    antecedentes_exp,
    receta_exp,
    fecha_exp
  }) => {
    try {
      const ResExpediente = await axios.post(
        `${BASE_URL_API}/maestra/expedienteM`,
        {
          id_mas,
          id_estexp,
          motivo_exp,
          diagnostico_exp,
          antecedentes_exp,
          receta_exp,
          fecha_exp
        },
        axiosConfig
      )

      return axiosSuccess(ResExpediente, 'ExpedienteMService.create')
    } catch (error) {
      return axiosError(error, 'ExpedienteMService')
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
      const ResExpediente = await axios.put(
        `${BASE_URL_API}/maestra/expedienteM`,
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
      return axiosSuccess(ResExpediente, 'ExpedienteMService.update')
    } catch (error) {
      return axiosError(error, 'ExpedienteMService')
    }
  },

  delete: async (id) => {
    try {
      const ResExpediente = await axios.delete(
        `${BASE_URL_API}/maestra/expedienteM/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResExpediente, 'ExpedienteMService.delete')
    } catch (error) {
      return axiosError(error, 'ExpedienteMService')
    }
  }
}
