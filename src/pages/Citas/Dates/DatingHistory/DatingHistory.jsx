import { LayoutUser } from '@/components'
import { ListOfDates } from './components'
import { useDates } from './hooks'

const DatingHistory = () => {
  const { dates } = useDates()

  return (
    <LayoutUser>
      <article className='h-full w-full overflow-y-scroll px-10 py-2'>
        {dates ? (
          <ListOfDates dates={dates} />
        ) : (
          <div>Aún no has agendado ninguna cita</div>
        )}
      </article>
    </LayoutUser>
  )
}

export default DatingHistory
