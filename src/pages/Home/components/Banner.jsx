import { Link } from 'react-router-dom'
import { CLOUDINARY_UPLOAD_PRESET } from '@/libs'

const Banner = () => {
  return (
    <section className='grid h-[85vh] w-full grid-cols-2 items-center justify-center'>
      <div className='flex h-full w-4/5 flex-col justify-center gap-5 p-10'>
        <div>
          <h1 className='relative h-auto text-[6vw] font-bold text-primary'>
            Veterinaria
          </h1>
          <h2 className='text-green relative mt-[-4%] pl-2 text-[2vw]'>
            Gatitos, Ositos y Perritos Kawaii
          </h2>
        </div>
        <Link
          to='/addAppointment'
          className='w-2/5 cursor-pointer rounded-md bg-primary py-2 text-center font-semibold text-white'
        >
          Agenda una cita
        </Link>
      </div>
      <div className='flex h-full w-full items-center justify-center'>
        <img
          src={`${CLOUDINARY_UPLOAD_PRESET}/App/Banner.png`}
          alt='Banner veterinaria img'
          className='h-4/6 w-10/12'
        />
      </div>
    </section>
  )
}

export default Banner
