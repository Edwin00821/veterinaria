import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const ColorCService = {
  list: async () => {
    try {
      const ResColor = await axios.get(
        `${BASE_URL_API}/catalogo/colorC`,
        axiosConfig
      )

      return axiosSuccess(ResColor, 'ColorCService.getAll')
    } catch (error) {
      return axiosError(error, 'ColorCService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResColor = await axios.get(
        `${BASE_URL_API}/catalogo/colorC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResColor, 'ColorCService.getAll')
    } catch (error) {
      return axiosError(error, 'ColorCService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResColor = await axios.post(
        `${BASE_URL_API}/catalogo/colorC`,
        Product,
        axiosConfig
      )

      return axiosSuccess(ResColor, 'ColorCService.create')
    } catch (error) {
      return axiosError(error, 'ColorCService')
    }
  },

  update: async (Product) => {
    try {
      const ResColor = await axios.put(
        `${BASE_URL_API}/catalogo/colorC`,
        Product,
        axiosConfig
      )
      return axiosSuccess(ResColor, 'ColorCService.update')
    } catch (error) {
      return axiosError(error, 'ColorCService')
    }
  },

  delete: async (id) => {
    try {
      const ResColor = await axios.delete(
        `${BASE_URL_API}/catalogo/colorC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResColor, 'ColorCService.delete')
    } catch (error) {
      return axiosError(error, 'ColorCService')
    }
  }
}
