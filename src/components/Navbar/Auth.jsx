import { CLOUDINARY_UPLOAD_PRESET } from '@/libs'
import { useSelector } from 'react-redux'

const Auth = () => {
  const cliente = useSelector((state) => state.client)
  return (
    <div className='flex w-full flex-col justify-between gap-7 p-10'>
      <h2 className='text-center text-4xl font-bold text-primary'>
        ¡Bienvenido!
      </h2>
      <div className='flex items-center gap-5 px-5'>
        <div className='grid h-[6vh] w-[5vw] place-content-center bg-transparent '>
          <img
            src={`${CLOUDINARY_UPLOAD_PRESET}/Users/Defaults.png`}
            alt='Logo de la veterinaria'
            className='h-full w-full'
          />
        </div>
        <h3 className='text-xl font-semibold'>{cliente.nombre_cli}</h3>
      </div>
    </div>
  )
}

export default Auth
