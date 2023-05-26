import { Logo } from '@/components'
import { Auth, ListOfNavs } from './'

const Navbar = ({ navs }) => {
  return (
    <header className='flex h-[15vh] w-full items-center justify-between px-5 py-2'>
      <Logo />
      <ListOfNavs navs={navs} />
      <Auth />
    </header>
  )
}

export default Navbar
