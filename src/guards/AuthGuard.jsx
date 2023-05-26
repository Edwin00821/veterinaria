import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '@/libs'

const AuthGuard = () => {
  const { isLogged: clientIsLogged } = useSelector((state) => state.client)
  const { isLogged: adminIsLogged } = useSelector((state) => state.admin)

  if (clientIsLogged || adminIsLogged) return <Outlet />

  return <Navigate replace to={PublicRoutes.HOME} />
}

export default AuthGuard
