import { PublicRoutes } from '@/libs'
import { Link } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='flex w-2/5 justify-between gap-7'>
      <Link
        to={PublicRoutes.SIGNIN}
        className='w-full rounded-2xl border-4 border-primary bg-primary px-5 py-2 text-center font-semibold text-white lg:text-lg'
      >
        Sing in
      </Link>
      <Link
        to={PublicRoutes.LOGIN}
        className='w-full rounded-2xl border-4 border-primary px-5 py-2 text-center font-semibold text-primary lg:text-lg'
      >
        Log in
      </Link>
    </div>
  )
}

export default Auth
