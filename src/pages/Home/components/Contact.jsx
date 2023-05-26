import { CLOUDINARY_UPLOAD_PRESET } from '@/libs'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <section className='flex h-[50vh] w-full flex-col items-center justify-center gap-10'>
      <h2 className='text-5xl font-bold text-primary underline decoration-wavy underline-offset-[15px]'>
        Urgencias 24 hrs
      </h2>
      <p className='text-lg text-[#757474]'>
        CECyT 9 Juan de Dios Bátiz, Popotla, Ciudad de México, CDMX
      </p>
      <div className='grid w-1/2 grid-cols-2 items-center justify-center'>
        <ContactInfo
          img={`${CLOUDINARY_UPLOAD_PRESET}/App/Correo.png`}
          text='GOPKawaii@gop.com'
        />
        <ContactInfo
          img={`${CLOUDINARY_UPLOAD_PRESET}/App/Telefono.png`}
          text='55 23 79 56 23'
        />
      </div>
    </section>
  )
}

export default Contact
