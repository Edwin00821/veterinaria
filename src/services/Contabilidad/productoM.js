import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const ProductoMService = {
  list: async () => {
    try {
      const ResProducto = await axios.get(
        `${BASE_URL_API}/maestra/productoM`,
        axiosConfig
      )

      return axiosSuccess(ResProducto, 'ProductService.getAll')
    } catch (error) {
      return axiosError(error, 'ProductService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResponseProduct = await axios.get(
        `${BASE_URL_API}/maestra/productoM/${id}`
      )
      return axiosSuccess(ResponseProduct, 'ProductService.getAll')
    } catch (error) {
      return axiosError(error, 'ProductService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResProducto = await axios.post(
        `${BASE_URL_API}/maestra/productoM`,
        Product
      )

      return axiosSuccess(ResProducto, 'ProductService.create')
    } catch (error) {
      return axiosError(error, 'ProductService')
    }
  },

  update: async (Product) => {
    try {
      const ResProducto = await axios.put(
        `${BASE_URL_API}/maestra/productoM/`,
        Product
      )
      return axiosSuccess(ResProducto, 'ProductService.update')
    } catch (error) {
      return axiosError(error, 'ProductService')
    }
  },

  delete: async (id) => {
    try {
      const ResponseProduct = await axios.delete(
        `${BASE_URL_API}/Product/${id}`
      )
      return axiosSuccess(ResponseProduct, 'ProductService.delete')
    } catch (error) {
      return axiosError(error, 'ProductService')
    }
  }
}
