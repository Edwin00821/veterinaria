import { Link, useLocation } from 'react-router-dom'
import { IoPawSharp } from 'react-icons/io5'

const NavItem = ({ href, name }) => {
  const { pathname } = useLocation()
  return (
    <Link
      to={href}
      className='flex h-full w-full cursor-pointer items-center gap-5 text-lg font-medium'
    >
      <IoPawSharp className='h-full w-10 text-primary' />
      <span
        className={`${pathname === href && 'border-b-2 border-primary'} px-3`}
      >
        {name}
      </span>
    </Link>
  )
}

export default NavItem
