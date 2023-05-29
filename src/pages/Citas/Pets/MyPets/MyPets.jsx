import { AddPet, ListOfPets } from './components'
import { usePets } from '@/hooks'

const MyPets = () => {
  const { pets } = usePets()

  return (
    <section className='flex h-full w-full flex-wrap gap-10 overflow-y-scroll scrollbar-none '>
      <ListOfPets pets={pets} />
      <AddPet />
    </section>
  )
}

export default MyPets
