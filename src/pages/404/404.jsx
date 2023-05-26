import { Link } from 'react-router-dom'
import { CLOUDINARY_UPLOAD_PRESET, PublicRoutes } from '@/libs'

const FourtyFour = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-5'>
      <h1 className='text-9xl font-bold text-primary'>404</h1>
      <h2 className='text-3xl font-semibold'>
        Lo sentimos no encontramos la página que estas buscando
      </h2>
      <div className='flex h-1/2 w-full items-center justify-center object-contain object-center '>
        <img
          src={`${CLOUDINARY_UPLOAD_PRESET}/App/404.png`}
          className='h-full '
          alt='Imagen de la cinica'
        />
      </div>
      <Link
        to={PublicRoutes.HOME}
        className='text-xl font-semibold underline decoration-primary decoration-wavy transition-all hover:text-primary hover:decoration-primary/60'
      >
        Volver al inicio
      </Link>
    </div>
  )
}

export default FourtyFour
