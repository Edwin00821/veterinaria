import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const RazaCService = {
  list: async () => {
    try {
      const ResRaza = await axios.get(
        `${BASE_URL_API}/catalogo/razaC`,
        axiosConfig
      )

      return axiosSuccess(ResRaza, 'RazaCService.getAll')
    } catch (error) {
      return axiosError(error, 'RazaCService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResRaza = await axios.get(
        `${BASE_URL_API}/catalogo/razaC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResRaza, 'RazaCService.getAll')
    } catch (error) {
      return axiosError(error, 'RazaCService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResRaza = await axios.post(
        `${BASE_URL_API}/catalogo/razaC`,
        Product,
        axiosConfig
      )

      return axiosSuccess(ResRaza, 'RazaCService.create')
    } catch (error) {
      return axiosError(error, 'RazaCService')
    }
  },

  update: async (Product) => {
    try {
      const ResRaza = await axios.put(
        `${BASE_URL_API}/catalogo/razaC`,
        Product,
        axiosConfig
      )
      return axiosSuccess(ResRaza, 'RazaCService.update')
    } catch (error) {
      return axiosError(error, 'RazaCService')
    }
  },

  delete: async (id) => {
    try {
      const ResRaza = await axios.delete(
        `${BASE_URL_API}/catalogo/razaC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResRaza, 'RazaCService.delete')
    } catch (error) {
      return axiosError(error, 'RazaCService')
    }
  }
}
