import { AddDate, ListOfDates } from './components'
import { useExpediente } from '@/hooks'

const NextDates = () => {
  const { expediente } = useExpediente()

  return (
    <section className='h-full w-full'>
      <AddDate />
      <section className='flex h-5/6 w-full gap-10 overflow-x-auto py-5 '>
        <ListOfDates dates={expediente} />
      </section>
    </section>
  )
}

export default NextDates
