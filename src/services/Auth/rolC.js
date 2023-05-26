import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const RolCService = {
  list: async () => {
    try {
      const ResRol = await axios.get(
        `${BASE_URL_API}/catalogo/rolC`,
        axiosConfig
      )

      return axiosSuccess(ResRol, 'RolCService.getAll')
    } catch (error) {
      return axiosError(error, 'RolCService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResRol = await axios.get(
        `${BASE_URL_API}/catalogo/rolC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResRol, 'RolCService.getAll')
    } catch (error) {
      return axiosError(error, 'RolCService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResRol = await axios.post(
        `${BASE_URL_API}/catalogo/rolC`,
        Product,
        axiosConfig
      )

      return axiosSuccess(ResRol, 'RolCService.create')
    } catch (error) {
      return axiosError(error, 'RolCService')
    }
  },

  update: async (Product) => {
    try {
      const ResRol = await axios.put(
        `${BASE_URL_API}/catalogo/rolC`,
        Product,
        axiosConfig
      )
      return axiosSuccess(ResRol, 'RolCService.update')
    } catch (error) {
      return axiosError(error, 'RolCService')
    }
  },

  delete: async (id) => {
    try {
      const ResRol = await axios.delete(
        `${BASE_URL_API}/catalogo/rolC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResRol, 'RolCService.delete')
    } catch (error) {
      return axiosError(error, 'RolCService')
    }
  }
}
