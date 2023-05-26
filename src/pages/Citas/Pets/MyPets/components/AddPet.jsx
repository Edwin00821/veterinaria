import { BiPlus } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const AddPet = () => {
  return (
    <Link
      to='/addPet'
      className='flex h-36 w-36 cursor-pointer flex-col items-center justify-center rounded-3xl border-4 border-dashed border-primary'
    >
      <h3 className='text-center text-xl font-bold text-[#BEBEBE]'>
        Agregar Mascota
      </h3>
      <BiPlus className='h-1/2 w-1/2 text-primary' />
    </Link>
  )
}

export default AddPet
