import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '@/libs'

const AccountancyGuard = () => {
  const { isLogged: adminIsLogged } = useSelector((state) => state.admin)

  if (adminIsLogged) return <Outlet />

  return <Navigate replace to={PublicRoutes.HOME} />
}

export default AccountancyGuard
