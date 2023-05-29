import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const AnimalProductoCService = {
  list: async () => {
    try {
      const ResAnimalProducto = await axios.get(
        `${BASE_URL_API}/catalogo/animalproductoC`,
        axiosConfig
      )

      return axiosSuccess(ResAnimalProducto, 'AnimalProductoCService.getAll')
    } catch (error) {
      return axiosError(error, 'AnimalProductoCService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResAnimalProducto = await axios.get(
        `${BASE_URL_API}/catalogo/animalproductoC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResAnimalProducto, 'AnimalProductoCService.getAll')
    } catch (error) {
      return axiosError(error, 'AnimalProductoCService.getOneById')
    }
  },

  create: async (Product) => {
    try {
      const ResAnimalProducto = await axios.post(
        `${BASE_URL_API}/catalogo/animalproductoC`,
        Product,
        axiosConfig
      )

      return axiosSuccess(ResAnimalProducto, 'AnimalProductoCService.create')
    } catch (error) {
      return axiosError(error, 'AnimalProductoCService')
    }
  },

  update: async (Product) => {
    try {
      const ResAnimalProducto = await axios.put(
        `${BASE_URL_API}/catalogo/animalproductoC`,
        Product,
        axiosConfig
      )
      return axiosSuccess(ResAnimalProducto, 'AnimalProductoCService.update')
    } catch (error) {
      return axiosError(error, 'AnimalProductoCService')
    }
  },

  delete: async (id) => {
    try {
      const ResAnimalProducto = await axios.delete(
        `${BASE_URL_API}/catalogo/animalproductoC/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResAnimalProducto, 'AnimalProductoCService.delete')
    } catch (error) {
      return axiosError(error, 'AnimalProductoCService')
    }
  }
}
