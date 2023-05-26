import { Link } from 'react-router-dom'
import { IoPawSharp } from 'react-icons/io5'
import { PrivateRoutes } from '@/libs'

const Pet = ({ id, name }) => {
  return (
    <Link
      to={`${PrivateRoutes.MY_PETS}/${id}`}
      className='flex h-36 w-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-3xl border-4 border-primary bg-primary'
    >
      <h3 className='text-center text-xl font-bold text-white'>{name}</h3>
      <IoPawSharp className='h-1/3 w-1/2 text-white' />
    </Link>
  )
}

export default Pet
