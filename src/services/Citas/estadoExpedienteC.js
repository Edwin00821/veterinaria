import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const EstadoExpedienteCService = {
  list: async () => {
    try {
      const ResEstadoExpediente = await axios.get(
        `${BASE_URL_API}/catalogo/estadoExpedienteC`,
        axiosConfig
      )

      return axiosSuccess(
        ResEstadoExpediente,
        'EstadoExpedienteCService.getAll'
      )
    } catch (error) {
      return axiosError(error, 'EstadoExpedienteCService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResEstadoExpediente = await axios.get(
        `${BASE_URL_API}/catalogo/estadoExpedienteC/${id}`,
        axiosConfig
      )
      return axiosSuccess(
        ResEstadoExpediente,
        'EstadoExpedienteCService.getAll'
      )
    } catch (error) {
      return axiosError(error, 'EstadoExpedienteCService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResEstadoExpediente = await axios.post(
        `${BASE_URL_API}/catalogo/estadoExpedienteC`,
        Product,
        axiosConfig
      )

      return axiosSuccess(
        ResEstadoExpediente,
        'EstadoExpedienteCService.create'
      )
    } catch (error) {
      return axiosError(error, 'EstadoExpedienteCService')
    }
  },

  update: async (Product) => {
    try {
      const ResEstadoExpediente = await axios.put(
        `${BASE_URL_API}/catalogo/estadoExpedienteC`,
        Product,
        axiosConfig
      )
      return axiosSuccess(
        ResEstadoExpediente,
        'EstadoExpedienteCService.update'
      )
    } catch (error) {
      return axiosError(error, 'EstadoExpedienteCService')
    }
  },

  delete: async (id) => {
    try {
      const ResEstadoExpediente = await axios.delete(
        `${BASE_URL_API}/catalogo/estadoExpedienteC/${id}`,
        axiosConfig
      )
      return axiosSuccess(
        ResEstadoExpediente,
        'EstadoExpedienteCService.delete'
      )
    } catch (error) {
      return axiosError(error, 'EstadoExpedienteCService')
    }
  }
}
