import { Logo } from '@/components'

const Header = () => {
  return (
    <header className='h-[15vh] w-full bg-primary'>
      <div className='h-full w-1/5'>
        <Logo />
      </div>
    </header>
  )
}

export default Header
