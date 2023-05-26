import { LayoutUser } from '@/components'
import { AddPet, ListOfPets } from './components'
import { usePets } from './hooks'

const MyPets = () => {
  const { pets } = usePets()
  return (
    <LayoutUser>
      <section className='flex h-full w-full flex-wrap gap-10 overflow-y-scroll scrollbar-none '>
        <ListOfPets pets={pets} />
        <AddPet />
      </section>
    </LayoutUser>
  )
}

export default MyPets
