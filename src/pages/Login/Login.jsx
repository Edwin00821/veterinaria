import { Logo } from '@/components'
import { CLOUDINARY_UPLOAD_PRESET } from '@/libs'
import { LoginForm } from './components'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='grid h-screen w-screen place-items-center bg-primary py-20'>
      <div className='flex h-full w-2/3 rounded-3xl bg-white p-10'>
        <div className='flex h-full w-1/2 flex-col items-center justify-center'>
          <h2 className='text-center text-5xl font-bold text-primary'>
            Log In
          </h2>
          <LoginForm />
          <p>
            ¿Aún no tienes cuenta?{' '}
            <Link
              to='/signin'
              className='text-primary transition-all hover:text-primary/75'
            >
              Registrate aquí
            </Link>
          </p>
        </div>
        <div className='border-1 m-auto h-full w-px bg-primary' />
        <div className='m-auto flex h-5/6 w-2/5 flex-col items-center'>
          <div className='h-1/5 w-full'>
            <Logo />
          </div>
          <div className='h-4/5 w-full rounded-[100%] bg-gray-200 p-16'>
            <img
              src={`${CLOUDINARY_UPLOAD_PRESET}/App/Clinica.png`}
              className='h-full w-full '
              alt='Imagen de la cinica'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
