import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const PeriodoDService = {
  list: async () => {
    try {
      const ResponseGen = await axios.get(
        `${BASE_URL_API}/detalle/periodoD`,
        axiosConfig
      )

      return axiosSuccess(ResponseGen, 'PeriodoDService.getAll')
    } catch (error) {
      return axiosError(error, 'PeriodoDService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResponseProduct = await axios.get(
        `${BASE_URL_API}/detalle/periodoD/${id}`
      )
      return axiosSuccess(ResponseProduct, 'PeriodoDService.getAll')
    } catch (error) {
      return axiosError(error, 'PeriodoDService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResponseGen = await axios.post(`${BASE_URL_API}/Product`, Product)

      return axiosSuccess(ResponseGen, 'PeriodoDService.create')
    } catch (error) {
      return axiosError(error, 'PeriodoDService')
    }
  },

  update: async (Product) => {
    try {
      const ResponseGen = await axios.put(
        `${BASE_URL_API}/detalle/periodoD/`,
        Product
      )
      return axiosSuccess(ResponseGen, 'PeriodoDService.update')
    } catch (error) {
      return axiosError(error, 'PeriodoDService')
    }
  },

  delete: async (id) => {
    try {
      const ResponseProduct = await axios.delete(
        `${BASE_URL_API}/Product/${id}`
      )
      return axiosSuccess(ResponseProduct, 'PeriodoDService.delete')
    } catch (error) {
      return axiosError(error, 'PeriodoDService')
    }
  }
}
