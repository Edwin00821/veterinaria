import axios from 'axios'
import { BASE_URL_API, axiosError, axiosSuccess, axiosConfig } from '@/libs'

export const DuenoVetDService = {
  list: async () => {
    try {
      const ResDuenoVet = await axios.get(
        `${BASE_URL_API}/detalle/duenoVeterinariaD`,
        axiosConfig
      )

      return axiosSuccess(ResDuenoVet, 'DuenoVetDService.getAll')
    } catch (error) {
      return axiosError(error, 'DuenoVetDService.getAll')
    }
  },

  searchById: async (id) => {
    try {
      const ResDuenoVet = await axios.get(
        `${BASE_URL_API}/detalle/duenoVeterinariaD/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResDuenoVet, 'DuenoVetDService.getAll')
    } catch (error) {
      return axiosError(error, 'DuenoVetDService.getOneById')
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
      const ResDuenoVet = await axios.post(
        `${BASE_URL_API}/detalle/duenoVeterinariaD`,
        { id_usu, nombre_cli, direccion_cli, telefono_cli, correo_cli, id_vet },
        axiosConfig
      )

      return axiosSuccess(ResDuenoVet, 'DuenoVetDService.create')
    } catch (error) {
      return axiosError(error, 'DuenoVetDService')
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
      const ResDuenoVet = await axios.put(
        `${BASE_URL_API}/detalle/duenoVeterinariaD`,
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
      return axiosSuccess(ResDuenoVet, 'DuenoVetDService.update')
    } catch (error) {
      return axiosError(error, 'DuenoVetDService')
    }
  },

  delete: async (id) => {
    try {
      const ResDuenoVet = await axios.delete(
        `${BASE_URL_API}/detalle/duenoVeterinariaD/${id}`,
        axiosConfig
      )
      return axiosSuccess(ResDuenoVet, 'DuenoVetDService.delete')
    } catch (error) {
      return axiosError(error, 'DuenoVetDService')
    }
  }
}
