import { Header, Navbar } from '@/components'
import { NavAdmin } from '@/libs'

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <Header />
      <main className='grid h-[85vh] w-full grid-cols-[25%_minmax(75%,_1fr)]'>
        <Navbar navs={NavAdmin} />
        <section className='h-[85vh] w-full px-5 py-16'>{children}</section>
      </main>
    </>
  )
}

export default LayoutAdmin
