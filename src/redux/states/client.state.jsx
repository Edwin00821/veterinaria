import { createSlice } from '@reduxjs/toolkit'
import { getSession } from '@/libs'

export const ClientEmptyState = {
  isLogged: false,
  id_cli: 0,
  nombre_cli: '',
  direccion_cli: '',
  telefono_cli: '',
  correo_cli: '',
  user: {
    correo_usu: '',
    contrasena_usu: '',
    rol: {
      id_rol: 0,
      nombre_rol: '',
      create_at: '',
      update_at: ''
    },
    create_at: '',
    update_at: ''
  },
  veterinaria: {
    id_vet: 0,
    nombre_vet: '',
    direccion_vet: '',
    telefono_vet: '',
    correo_vet: '',
    create_at: '',
    update_at: ''
  },
  create_at: '',
  update_at: ''
}

export const clientSlice = createSlice({
  name: 'client',
  initialState: getSession('client') ?? ClientEmptyState,
  reducers: {
    createClient: (state, action) => (state = action.payload),
    updateClient: (state, action) => ({
      ...state,
      ...action.payload
    }),
    deleteClient: (state) => (state = ClientEmptyState)
  }
})

export const { createClient, updateClient, deleteClient } = clientSlice.actions

export default clientSlice.reducer
