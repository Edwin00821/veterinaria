import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RolCService, VeterinariaMService } from '@/services'
import { LoginSchema, signIn } from '@/libs'
import { Input } from '@/components'
import { useClientes, useDuenoVet, useUsuarios } from '../hooks'
import { toast } from 'react-toastify'

import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser
} from 'react-icons/ai'

const customId = 'custom-id-LoginForm'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const { usuarios } = useUsuarios()
  const { clientes } = useClientes()
  const { duenos } = useDuenoVet()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(LoginSchema)
  })

  const onSubmit = async ({ email, password }) => {
    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      theme: 'dark',
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined
    })
    const user = usuarios?.filter(
      ({ correo_usu, contrasena_usu }) =>
        correo_usu === email && contrasena_usu === password
    )[0]

    if (user.length !== 0) {
      toast.update(customId, {
        render: 'Datos validados correctamente',
        type: 'success',
        isLoading: false,
        autoClose: 2000
      })

      if (user.id_rol === 1) {
        const dueno = duenos.filter(({ id_usu }) => id_usu === user.id_usu)[0]
        const { rol } = await RolCService.searchById(user.id_rol)
        const { veterinaria } = await VeterinariaMService.searchById(
          dueno.id_vet
        )

        signIn('admin', {
          isLogged: true,
          id_duevet: dueno.id_duevet,
          nombre_duevet: dueno.nombre_duevet,
          user: {
            correo_usu: user.correo_usu,
            contrasena_usu: user.correo_usu,
            rol,
            create_at: user.create_at,
            update_at: user.update_at
          },
          veterinaria,
          create_at: dueno.create_at,
          update_at: dueno.update_at
        })
      }

      if (user.id_rol === 6) {
        const client = clientes.filter(
          ({ id_usu }) => id_usu === user.id_usu
        )[0]
        const { rol } = await RolCService.searchById(user.id_rol)
        const { veterinaria } = await VeterinariaMService.searchById(
          client.id_vet
        )

        signIn('client', {
          isLogged: true,
          id_cli: client.id_cli,
          nombre_cli: client.nombre_cli,
          direccion_cli: client.direccion_cli,
          telefono_cli: client.telefono_cli,
          correo_cli: client.correo_cli,
          user: {
            correo_usu: user.correo_usu,
            contrasena_usu: user.correo_usu,
            rol,
            create_at: user.create_at,
            update_at: user.update_at
          },
          veterinaria,
          create_at: client.create_at,
          update_at: client.update_at
        })
      }

      navigate('/')
    } else {
      toast.update(customId, {
        render: 'Datos incorrectos',
        type: 'error',
        isLoading: false,
        autoClose: 2000
      })
    }
  }

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <form
      className='flex h-2/3 w-full flex-col items-center justify-center  gap-10'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label='Correo'
        icon={<AiOutlineUser />}
        register={{ ...register('email') }}
        errors={errors.email}
      />

      <Input
        label='Contraseña'
        type={showPassword ? 'text' : 'password'}
        icon={
          showPassword ? (
            <AiOutlineEye onClick={handlePassword} />
          ) : (
            <AiOutlineEyeInvisible onClick={handlePassword} />
          )
        }
        iconPosition='right'
        register={{ ...register('password') }}
        errors={errors.password}
      />

      <button
        type='submit'
        className='relative flex rounded-xl bg-primary p-2 text-center font-semibold text-white'
      >
        Log In
      </button>
    </form>
  )
}

export default LoginForm
