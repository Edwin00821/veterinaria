import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const ClienteDService = {
  list: async () => {
    try {
      const ResCliente = await axios.get(
        `${BASE_URL_API}/detalle/clienteD`,
        axiosConfig
      )

      return axiosSuccess(ResCliente, 'ClienteDService.getAll')
    } catch (error) {
      return axiosError(error, 'ClienteDService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResCliente = await axios.get(
        `${BASE_URL_API}/detalle/clienteD/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResCliente, 'ClienteDService.getAll')
    } catch (error) {
      return axiosError(error, 'ClienteDService.getOneById')
    }
  },

  create: async ({
    id_usu,
    nombre_cli,
    direccion_cli,
    telefono_cli,
    correo_cli,
    id_vet
  }) => {
    try {
      const ResCliente = await axios.post(
        `${BASE_URL_API}/detalle/clienteD`,
        { id_usu, nombre_cli, direccion_cli, telefono_cli, correo_cli, id_vet },
        axiosConfig
      )

      return axiosSuccess(ResCliente, 'ClienteDService.create')
    } catch (error) {
      return axiosError(error, 'ClienteDService')
    }
  },

  update: async ({
    id_usu,
    nombre_cli,
    direccion_cli,
    telefono_cli,
    correo_cli,
    id_vet
  }) => {
    try {
      const ResCliente = await axios.put(
        `${BASE_URL_API}/detalle/clienteD`,
        {
          id_usu,
          nombre_cli,
          direccion_cli,
          telefono_cli,
          correo_cli,
          id_vet
        },
        axiosConfig
      )
      return axiosSuccess(ResCliente, 'ClienteDService.update')
    } catch (error) {
      return axiosError(error, 'ClienteDService')
    }
  },

  delete: async (id) => {
    try {
      const ResCliente = await axios.delete(
        `${BASE_URL_API}/detalle/clienteD/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResCliente, 'ClienteDService.delete')
    } catch (error) {
      return axiosError(error, 'ClienteDService')
    }
  }
}
