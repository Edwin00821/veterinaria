import { Link } from 'react-router-dom'

const Office = () => {
  return (
    <section className='flex h-[40vh] w-full flex-col items-center justify-center gap-10 bg-primary'>
      <h2 className='text-4xl font-bold text-white'>
        Conoce Nuestras Sucursales
      </h2>
      <Link
        to='/'
        className='rounded-full bg-white px-10 py-2 font-semibold text-primary'
      >
        Ubicacion
      </Link>
    </section>
  )
}

export default Office
