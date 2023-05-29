import { Link, useLocation } from 'react-router-dom'
import { IoPawSharp } from 'react-icons/io5'

const NavItem = ({ href, name }) => {
  const { pathname } = useLocation()

  return (
    <Link
      to={href}
      className='flex h-full w-full cursor-pointer items-center gap-5 rounded-lg px-5 text-lg font-medium text-primary transition-all hover:bg-primary hover:text-white '
    >
      <IoPawSharp className='h-full w-10' />
      <span
        className={`${
          pathname === href && 'border-b-2 border-primary'
        } px-3 text-slate-600 `}
      >
        {name}
      </span>
    </Link>
  )
}

export default NavItem
