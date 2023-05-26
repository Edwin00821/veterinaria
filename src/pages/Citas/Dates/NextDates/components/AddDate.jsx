import { Link } from 'react-router-dom'
import { BiPlus } from 'react-icons/bi'

const AddDate = () => {
  return (
    <div className='flex h-1/6 w-full items-center justify-end px-2'>
      <Link
        to={'/addDate'}
        className='flex items-center justify-center gap-2 rounded-xl border-[3px] border-dashed border-primary px-7 text-lg font-medium'
      >
        Agendar cita
        <BiPlus className='h-8 w-8 text-primary' />
      </Link>
    </div>
  )
}

export default AddDate
