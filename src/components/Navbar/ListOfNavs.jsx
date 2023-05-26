import NavItem from './NavItem'

const ListNavs = ({ navs }) => {
  return (
    <nav className='h-full w-full'>
      <ul className='flex flex-col justify-end gap-5 px-5'>
        {navs?.map(({ href, name, img }) => (
          <li key={href} className='h-[5vh] px-5 text-lg font-medium'>
            <NavItem href={href} name={name} img={img} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ListNavs
