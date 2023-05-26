import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '@/libs'

const DatesGuard = () => {
  const { isLogged: clientIsLogged } = useSelector((state) => state.client)

  if (clientIsLogged) return <Outlet />

  return <Navigate replace to={PublicRoutes.HOME} />
}

export default DatesGuard
