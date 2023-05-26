import { useEffect, useState } from 'react'
import { LayoutUser } from '@/components'
import { AddDateForm } from './components'

const misMascotas = [
  { value: '0', label: '' },
  { value: '1', label: 'Tobi' },
  { value: '2', label: 'Rino' },
  { value: '3', label: 'Rocky' },
  { value: '4', label: 'Camila' }
]

const areas = [
  { value: '0', label: '' },
  { value: '1', label: 'Urgencias' },
  { value: '2', label: 'Otro' }
]

const sucursales = [
  { value: '0', label: '' },
  { value: '1', label: 'Batiz' },
  { value: '2', label: 'Otro' }
]

const medicos = [
  { value: '0', label: '' },
  { value: '1', label: 'Barbie' },
  { value: '2', label: 'Erick' }
]

const AddDate = () => {
  const user = true
  const [doctor, setDoctor] = useState(false)

  useEffect(() => {
    if (doctor) {
      setDoctor(user)
    }
  }, [doctor])

  return (
    <LayoutUser>
      <section className='flex h-full w-full flex-col items-center justify-center'>
        <h2 className='text-3xl font-extrabold text-emerald-400'>
          Agendar Cita
        </h2>
        <AddDateForm />
      </section>
    </LayoutUser>
  )
  // return (
  //   <div className='mx-auto my-10 flex h-5/6 w-5/6 flex-col items-center justify-center gap-10 overflow-auto rounded-3xl border-4 border-dashed border-emerald-400 pb-10 pt-28'>
  //     <h2 className='mt-[12vh] text-3xl font-bold text-emerald-400'>
  //       Agendar Cita
  //     </h2>
  //     <div className='grid w-full grid-cols-2 items-center justify-center'>
  //       <div className='flex flex-col items-center justify-center'>
  //         <Select name='¿Para quien es la cita?' options={misMascotas} />
  //         <Input name='Nombre del dueño: ' type='' />
  //         <Input name='Razón de la cita:' />
  //         <Input name='Descripcion:' />
  //       </div>
  //       <div className='flex flex-col items-center justify-center'>
  //         <Input name='Fecha de la cita:' type='date' />
  //         <Select name='Area a la que asistirá' options={areas} />
  //         <Select name='Sucursal' options={sucursales} />
  //         <Select name='Médico' options={medicos} />
  //       </div>
  //     </div>
  //     <button className='rounded-xl bg-emerald-400 px-6 py-2 text-lg font-bold text-white'>
  //       Agregar mascota
  //     </button>
  //   </div>
  // )
}
export default AddDate
