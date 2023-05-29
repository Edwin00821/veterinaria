import { getSession } from '@/libs'
import { createSlice } from '@reduxjs/toolkit'

export const AdminEmptyState = {
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

export const adminSlice = createSlice({
  name: 'admin',
  initialState: getSession('admin') ?? AdminEmptyState,
  reducers: {
    createAdmin: (state, action) => (state = action.payload),
    updeteAdmin: (state, action) => ({
      ...state,
      ...action.payload
    }),
    deleteAdmin: (state) => (state = AdminEmptyState)
  }
})

export const { createAdmin, updeteAdmin, deleteAdmin } = adminSlice.actions

export default adminSlice.reducer
