import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useSelect } from '../hooks'
import { MascotaMService } from '@/services'
import { Select, Input } from '@/components'
import { AddPetSchema, BASE_CLOUDINARY_API } from '@/libs'
import { toast } from 'react-toastify'

const customId = 'custom-id-AddPetForm'
const AddDateForm = () => {
  const cliente = useSelector((state) => state.client)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(AddPetSchema)
  })

  const { color, sexo, especie, raza } = useSelect({
    especieSelected: watch('especie')
  })

  const onSubmit = async ({
    nombre_mas,
    fechaNac_mas,
    urlFoto_mas,
    color,
    sexo,
    raza
  }) => {
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

    const data = new FormData()
    data.append('file', urlFoto_mas.file)
    data.append('upload_preset', 'vet_pets')
    const res = await fetch(BASE_CLOUDINARY_API, {
      method: 'POST',
      body: data
    })

    const file = await res.json()

    const { mascota } = await MascotaMService.create({
      id_cli: cliente.id_cli,
      nombre_mas,
      fechaNac_mas,
      urlFoto_mas: file.public_id,
      id_raz: raza.id,
      id_sex: sexo.id,
      id_col: color.id
    })

    if (mascota) {
      toast.update(customId, {
        render: 'Mascota agregada correctamente',
        type: 'success',
        isLoading: false,
        autoClose: 2000
      })
      navigate('/myPets')
    } else {
      toast.update(customId, {
        render: 'Datos incorrectos',
        type: 'error',
        isLoading: false,
        autoClose: 2000
      })
    }
  }
  return (
    <form
      className='flex h-full w-full flex-col items-center justify-center gap-x-5 gap-y-5 py-5'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='grid h-full w-2/3 grid-cols-2 items-center justify-center gap-x-5'>
        <Input
          label='¿Para quién es la cita?'
          register={{ ...register('nombre_mas') }}
          errors={errors.nombre_mas}
        />

        <Input
          label='Fecha de la cita'
          type='date'
          register={{ ...register('fechaNac_mas') }}
          errors={errors.fechaNacq_mas}
        />

        <Select
          label='Color'
          options={color}
          value={watch('color')}
          setValue={setValue}
          register={{ ...register('color') }}
          errors={errors.color}
        />

        <Select
          label='Sexo'
          options={sexo}
          value={watch('sexo')}
          setValue={setValue}
          register={{ ...register('sexo') }}
          errors={errors.sexo}
        />

        <Select
          label='Especie'
          options={especie}
          value={watch('especie')}
          setValue={setValue}
          register={{ ...register('especie') }}
          errors={errors.especie}
        />

        <Select
          label='Raza'
          options={raza}
          value={watch('raza')}
          setValue={setValue}
          register={{ ...register('raza') }}
          errors={errors.raza}
        />
      </div>

      <button className='col-span-2 rounded-xl bg-emerald-400 px-6 py-2 text-lg font-bold text-white'>
        Agregar mascota
      </button>
    </form>
  )
}

export default AddDateForm
