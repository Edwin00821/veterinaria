import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useSelect } from '../hooks'
import { ExpedienteMService } from '@/services'
import { Select, Input } from '@/components'
import { AddDateSchema } from '@/libs'
import { toast } from 'react-toastify'

const customId = 'custom-id-AddPetForm'
const AddDateForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(AddDateSchema)
  })

  const { pet } = useSelect()
  console.log(new Date())
  const onSubmit = async ({
    mascota,
    fecha_exp,
    motivo_exp,
    antecedentes_exp
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

    const { expediente } = await ExpedienteMService.create({
      id_mas: mascota.id,
      id_estexp: 1,
      motivo_exp,
      diagnostico_exp: '',
      antecedentes_exp,
      receta_exp: '',
      fecha_exp
    })

    if (expediente) {
      toast.update(customId, {
        render: 'Expediente agregado correctamente',
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
        <Select
          label='¿Para quién es la cita?'
          options={pet}
          value={watch('mascota')}
          setValue={setValue}
          register={{ ...register('mascota') }}
          errors={errors.mascota}
        />

        <Input
          label='Fecha de la cita'
          type='date'
          register={{ ...register('fecha_exp') }}
          errors={errors.fecha_exp}
        />

        <Input
          label='Motivo'
          register={{ ...register('motivo_exp') }}
          errors={errors.motivo_exp}
        />

        <Input
          label='Antecedentes'
          register={{ ...register('antecedentes_exp') }}
          errors={errors.antecedentes_exp}
        />
      </div>

      <button className='col-span-2 rounded-xl bg-emerald-400 px-6 py-2 text-lg font-bold text-white'>
        Agregar mascota
      </button>
    </form>
  )
}

export default AddDateForm
