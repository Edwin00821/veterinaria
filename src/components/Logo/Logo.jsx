import { CLOUDINARY_UPLOAD_PRESET } from '@/libs'

const Logo = ({ color }) => {
  return (
    <img
      src={`${CLOUDINARY_UPLOAD_PRESET}/App/Logo.png`}
      alt='Logo de la veterinaria'
      className='h-full w-full'
    />
  )
}

export default Logo
