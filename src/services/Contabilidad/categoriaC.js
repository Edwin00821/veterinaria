import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const CategoriaCService = {
  list: async () => {
    try {
      const ResCategoria = await axios.get(
        `${BASE_URL_API}/catalogo/categoriaC`,
        axiosConfig
      )

      return axiosSuccess(ResCategoria, 'CategoriaCService.getAll')
    } catch (error) {
      return axiosError(error, 'CategoriaCService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResCategoria = await axios.get(
        `${BASE_URL_API}/catalogo/categoriaC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResCategoria, 'CategoriaCService.getAll')
    } catch (error) {
      return axiosError(error, 'CategoriaCService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResCategoria = await axios.post(
        `${BASE_URL_API}/catalogo/categoriaC`,
        Product,
        axiosConfig
      )

      return axiosSuccess(ResCategoria, 'CategoriaCService.create')
    } catch (error) {
      return axiosError(error, 'CategoriaCService')
    }
  },

  update: async (Product) => {
    try {
      const ResCategoria = await axios.put(
        `${BASE_URL_API}/catalogo/categoriaC`,
        Product,
        axiosConfig
      )
      return axiosSuccess(ResCategoria, 'CategoriaCService.update')
    } catch (error) {
      return axiosError(error, 'CategoriaCService')
    }
  },

  delete: async (id) => {
    try {
      const ResCategoria = await axios.delete(
        `${BASE_URL_API}/catalogo/categoriaC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResCategoria, 'CategoriaCService.delete')
    } catch (error) {
      return axiosError(error, 'CategoriaCService')
    }
  }
}
