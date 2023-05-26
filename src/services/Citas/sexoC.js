import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const SexoCService = {
  list: async () => {
    try {
      const ResSexo = await axios.get(
        `${BASE_URL_API}/catalogo/sexoC`,
        axiosConfig
      )

      return axiosSuccess(ResSexo, 'SexoCService.getAll')
    } catch (error) {
      return axiosError(error, 'SexoCService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResSexo = await axios.get(
        `${BASE_URL_API}/catalogo/sexoC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResSexo, 'SexoCService.getAll')
    } catch (error) {
      return axiosError(error, 'SexoCService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResSexo = await axios.post(
        `${BASE_URL_API}/catalogo/sexoC`,
        Product,
        axiosConfig
      )

      return axiosSuccess(ResSexo, 'SexoCService.create')
    } catch (error) {
      return axiosError(error, 'SexoCService')
    }
  },

  update: async (Product) => {
    try {
      const ResSexo = await axios.put(
        `${BASE_URL_API}/catalogo/sexoC`,
        Product,
        axiosConfig
      )
      return axiosSuccess(ResSexo, 'SexoCService.update')
    } catch (error) {
      return axiosError(error, 'SexoCService')
    }
  },

  delete: async (id) => {
    try {
      const ResSexo = await axios.delete(
        `${BASE_URL_API}/catalogo/sexoC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResSexo, 'SexoCService.delete')
    } catch (error) {
      return axiosError(error, 'SexoCService')
    }
  }
}
