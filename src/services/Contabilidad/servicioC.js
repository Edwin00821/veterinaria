import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const ServicioCService = {
  list: async () => {
    try {
      const ResponseGen = await axios.get(
        `${BASE_URL_API}/catalogo/servicioC`,
        axiosConfig
      )

      return axiosSuccess(ResponseGen, 'ProductService.getAll')
    } catch (error) {
      return axiosError(error, 'ProductService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResponseProduct = await axios.get(
        `${BASE_URL_API}/catalogo/servicioC/${id}`
      )
      return axiosSuccess(ResponseProduct, 'ProductService.getAll')
    } catch (error) {
      return axiosError(error, 'ProductService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResponseGen = await axios.post(`${BASE_URL_API}/Product`, Product)

      return axiosSuccess(ResponseGen, 'ProductService.create')
    } catch (error) {
      return axiosError(error, 'ProductService')
    }
  },

  update: async (Product) => {
    try {
      const ResponseGen = await axios.put(
        `${BASE_URL_API}/catalogo/servicioC/`,
        Product
      )
      return axiosSuccess(ResponseGen, 'ProductService.update')
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
