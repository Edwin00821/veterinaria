import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes } from '@/libs'

const PublicGuard = () => {
  const { isLogged: clientIsLogged } = useSelector((state) => state.client)
  const { isLogged: adminIsLogged } = useSelector((state) => state.admin)

  if (clientIsLogged) return <Navigate replace to={PrivateRoutes.MY_PETS} />
  if (adminIsLogged) return <Navigate replace to={PrivateRoutes.DATES} />
  return <Outlet />
}

export default PublicGuard
