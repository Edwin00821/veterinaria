
import { AddPetForm } from './components'

const AddPet = () => {
  return (
      <section className='flex h-full w-full flex-col items-center justify-center'>
        <h2 className='text-3xl font-extrabold text-emerald-400'>
          Registro de Mascota
        </h2>
        <AddPetForm />
      </section>
  )
}

export default AddPet
