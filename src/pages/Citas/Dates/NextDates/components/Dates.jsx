import { usePets, useEstadoExpediente } from '@/hooks'
import { BASE_CLOUDINARY_URL } from '@/libs'

const Dates = ({ img, state, doctor = 'Sin asignar', branch, date }) => {
  const { estadoExpediente } = useEstadoExpediente(state)
  const { pets } = usePets(img)
  console.log({ pets })
  return (
    <article className='flex h-full min-w-[300px] flex-col items-center justify-center gap-5 rounded-3xl bg-primary px-10 py-5 text-white'>
      <div className='h-1/3 w-1/2 rounded-[100%] bg-gray-500'>
        <img
          className='h-full w-full rounded-[100%]'
          src={`${BASE_CLOUDINARY_URL}/image/upload/v1681327345/${pets?.urlFoto_mas}`}
          alt='imagen de la mascota'
        />
      </div>
      <div className='flex h-1/2 w-full flex-col justify-center gap-3 text-xl font-bold '>
        <h4>Seguimiento: {estadoExpediente?.nombre_estexp}</h4>
        <h4>Médico: {doctor}</h4>
        <h4>Sucursal: {branch}</h4>
        <h4>Fecha: {date}</h4>
      </div>
      <div className='h-14 w-2/3 rounded-xl bg-gray-300'></div>
    </article>
  )
}

export default Dates
