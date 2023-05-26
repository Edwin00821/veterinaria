import NavItem from './NavItem'

const ListNavs = ({ navs }) => {
  return (
    <ul className='flex w-full justify-end gap-5 px-5'>
      {navs?.map(({ href, name }) => (
        <li
          key={href}
          className='cursor-pointer text-lg font-medium text-primary'
        >
          <NavItem href={href} name={name} />
        </li>
      ))}
    </ul>
  )
}

export default ListNavs
