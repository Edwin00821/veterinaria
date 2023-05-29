import { logOut } from '@/libs'
import { useNavigate } from 'react-router-dom'
import NavItem from './NavItem'

const ListNavs = ({ navs }) => {
  const navigate = useNavigate()

  return (
    <nav className='flex h-full w-full flex-col items-center'>
      <ul className='flex flex-col justify-end gap-5 px-5'>
        {navs?.map(({ href, name, img }) => (
          <li key={href} className='h-[5vh] px-5 text-lg font-medium'>
            <NavItem href={href} name={name} img={img} />
          </li>
        ))}
      </ul>
      <button
        className='mt-10 rounded-lg border-2 border-primary px-5  py-2 transition-all hover:bg-primary hover:text-white'
        onClick={() => {
          logOut()
          navigate('/')
        }}
      >
        Cerrar Sesion
      </button>
    </nav>
  )
}

export default ListNavs
