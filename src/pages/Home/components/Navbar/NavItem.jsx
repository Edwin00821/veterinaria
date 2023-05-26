import { Link } from 'react-router-dom'

const NavItem = ({ href, name }) => {
  return <Link to={href}>{name}</Link>
}

export default NavItem
