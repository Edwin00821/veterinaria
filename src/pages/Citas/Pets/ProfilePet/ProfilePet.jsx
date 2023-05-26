import { LayoutUser } from '@/components'
import { useParams } from 'react-router-dom'
import { usePets } from './hooks'
import { BASE_CLOUDINARY_URL, getAge } from '@/libs'

const ProfilePet = () => {
  const { id } = useParams()
  const { pets } = usePets({ id_mas: id })

  console.log(pets)

  return (
    <LayoutUser>
      {pets === undefined ? (
        <h1>Loading...</h1>
      ) : pets ? (
        <section className='grid h-full w-full grid-cols-[30%_1fr] place-items-center p-10 '>
          <div className='grid h-full w-full place-items-center'>
            <img
              className='h-40 w-40 rounded-full border-2 border-primary'
              src={`${BASE_CLOUDINARY_URL}/image/upload/v1681327345/${pets.urlFoto_mas}`}
              alt='Imagen de la macota'
            />
          </div>
          <div className='grid h-1/2 w-full grid-cols-2 items-center text-2xl font-bold text-slate-500'>
            <p>
              Nombre: <span>{pets.nombre_mas}</span>
            </p>
            <p>
              Edad: <span>{getAge(pets.fechaNac_mas)}</span>
            </p>
            <p>
              Especie: <span>{pets.raza.especie.nombre_esp}</span>
            </p>
            <p>
              Raza: <span>{pets.raza.nombre_raz}</span>
            </p>
            <p>
              Sexo: <span>{pets.sexo.nombre_sex}</span>
            </p>
            <p>
              Color: <span>{pets.color.nombre_col}</span>
            </p>
          </div>
        </section>
      ) : (
        <h1>No encontramos tu mascota 😢</h1>
      )}
    </LayoutUser>
  )
}

export default ProfilePet
