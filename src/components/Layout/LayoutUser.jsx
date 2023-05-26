import { Header, Navbar } from '@/components'
import { NavUser } from '@/libs'

const LayoutUser = ({ children }) => {
  return (
    <>
      <Header />
      <main className='grid h-[85vh] w-full grid-cols-[25%_minmax(75%,_1fr)]'>
        <Navbar navs={NavUser} />
        <section className='h-[85vh] px-5 py-16'>{children}</section>
      </main>
    </>
  )
}

export default LayoutUser
