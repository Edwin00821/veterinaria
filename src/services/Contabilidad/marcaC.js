import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const MarcaCService = {
  list: async () => {
    try {
      const ResMarca = await axios.get(
        `${BASE_URL_API}/catalogo/marcaC`,
        axiosConfig
      )

      return axiosSuccess(ResMarca, 'MarcaCService.getAll')
    } catch (error) {
      return axiosError(error, 'MarcaCService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResMarca = await axios.get(
        `${BASE_URL_API}/catalogo/marcaC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResMarca, 'MarcaCService.getAll')
    } catch (error) {
      return axiosError(error, 'MarcaCService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResMarca = await axios.post(
        `${BASE_URL_API}/catalogo/marcaC`,
        Product,
        axiosConfig
      )

      return axiosSuccess(ResMarca, 'MarcaCService.create')
    } catch (error) {
      return axiosError(error, 'MarcaCService')
    }
  },

  update: async (Product) => {
    try {
      const ResMarca = await axios.put(
        `${BASE_URL_API}/catalogo/marcaC`,
        Product,
        axiosConfig
      )
      return axiosSuccess(ResMarca, 'MarcaCService.update')
    } catch (error) {
      return axiosError(error, 'MarcaCService')
    }
  },

  delete: async (id) => {
    try {
      const ResMarca = await axios.delete(
        `${BASE_URL_API}/catalogo/marcaC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResMarca, 'MarcaCService.delete')
    } catch (error) {
      return axiosError(error, 'MarcaCService')
    }
  }
}
