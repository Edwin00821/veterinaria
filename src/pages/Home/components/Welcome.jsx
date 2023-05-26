import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <section className='flex w-full flex-col items-center justify-center gap-10 bg-primary py-10'>
      <h2 className='text-5xl font-bold text-white underline decoration-wavy underline-offset-8 '>
        Bienvenidos
      </h2>

      <p className='w-1/2 text-center text-xl text-white'>
        En GOP lo más importante es la salud de los animales de compañía,
        nuestros servicios abarcan desde medicina preventiva hasta diagnóstico
        avanzado, cirugía de especialidad y mínima invasión.
      </p>
      <p className='w-1/2 text-center text-xl text-white'>
        Nuestra Clínica Veterinaria se encuentra abierta de lunes a domingo las
        24 horas los 365 días del año.
      </p>
      <Link
        to='/#QuienesSomos'
        className='rounded-full bg-white px-10 py-2 font-semibold text-primary'
      >
        ¿Quienes Somos?
      </Link>
    </section>
  )
}

export default Welcome
