import { LayoutUser } from '@/components'
import { AddDate, ListOfDates } from './components'

const NextDates = () => {
  return (
    <LayoutUser>
      <section className='h-full w-full'>
        <AddDate />
        <section className='flex h-5/6 w-full gap-10 overflow-x-auto py-5 '>
          <ListOfDates />
        </section>
      </section>
    </LayoutUser>
  )
}

export default NextDates
