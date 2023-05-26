import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const EspecieCService = {
  list: async () => {
    try {
      const ResEspecie = await axios.get(
        `${BASE_URL_API}/catalogo/especieC`,
        axiosConfig
      )

      return axiosSuccess(ResEspecie, 'EspecieCService.getAll')
    } catch (error) {
      return axiosError(error, 'EspecieCService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResEspecie = await axios.get(
        `${BASE_URL_API}/catalogo/especieC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResEspecie, 'EspecieCService.getAll')
    } catch (error) {
      return axiosError(error, 'EspecieCService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResEspecie = await axios.post(
        `${BASE_URL_API}/catalogo/especieC`,
        Product,
        axiosConfig
      )

      return axiosSuccess(ResEspecie, 'EspecieCService.create')
    } catch (error) {
      return axiosError(error, 'EspecieCService')
    }
  },

  update: async (Product) => {
    try {
      const ResEspecie = await axios.put(
        `${BASE_URL_API}/catalogo/especieC`,
        Product,
        axiosConfig
      )
      return axiosSuccess(ResEspecie, 'EspecieCService.update')
    } catch (error) {
      return axiosError(error, 'EspecieCService')
    }
  },

  delete: async (id) => {
    try {
      const ResEspecie = await axios.delete(
        `${BASE_URL_API}/catalogo/especieC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResEspecie, 'EspecieCService.delete')
    } catch (error) {
      return axiosError(error, 'EspecieCService')
    }
  }
}
