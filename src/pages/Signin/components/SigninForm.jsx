import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Input } from '@/components'
import { UsuarioMService, ClienteDService } from '@/services'
import { RegisterSchema } from '@/libs'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [confirmShowPassword, setConfirmShowPassword] = useState(false)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(RegisterSchema)
  })

  const onSubmit = async ({
    nombre_cli,
    correo_usu,
    contrasena_usu,
    direccion_cli,
    telefono_cli
  }) => {
    const { usuario } = await UsuarioMService.create({
      correo_usu,
      contrasena_usu,
      id_rol: 6
    })

    const { cliente } = await ClienteDService.create({
      id_usu: usuario.id_usu,
      nombre_cli,
      direccion_cli,
      telefono_cli,
      correo_cli: correo_usu,
      id_vet: 1
    })

    if (usuario && cliente) {
      navigate('/login')
    }
  }

  return (
    <form
      className='flex h-[80%] w-full flex-col items-center justify-center '
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='grid h-full w-3/4 grid-cols-2 items-center justify-center gap-x-32'>
        <Input
          label='Nombre'
          register={{ ...register('nombre_cli') }}
          errors={errors.nombre_cli}
        />

        <Input
          label='Correo'
          register={{ ...register('correo_usu') }}
          errors={errors.correo_usu}
        />

        <Input
          label='Contraseña'
          type={showPassword ? 'text' : 'password'}
          icon={
            showPassword ? (
              <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => setShowPassword(!showPassword)}
              />
            )
          }
          iconPosition='right'
          register={{ ...register('contrasena_usu') }}
          errors={errors.contrasena_usu}
        />

        <Input
          label='Confirmar Contraseña'
          type={confirmShowPassword ? 'text' : 'password'}
          icon={
            confirmShowPassword ? (
              <AiOutlineEye
                onClick={() => setConfirmShowPassword(!confirmShowPassword)}
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => setConfirmShowPassword(!confirmShowPassword)}
              />
            )
          }
          register={{ ...register('confirmPassword') }}
          errors={errors.confirmPassword}
        />

        <Input
          label='Direccion'
          register={{ ...register('direccion_cli') }}
          errors={errors.direccion_cli}
        />

        <Input
          label='Telefono'
          register={{ ...register('telefono_cli') }}
          errors={errors.telefono_cli}
        />
      </div>

      <button
        type='submit'
        className='w-1/4 rounded-xl bg-primary p-2 text-center font-semibold text-white'
      >
        Sign in
      </button>
    </form>
  )
}

export default SigninForm
