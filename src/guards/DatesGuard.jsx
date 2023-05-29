import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '@/libs'
import { LayoutUser } from '@/components'

const DatesGuard = () => {
  const { isLogged: clientIsLogged } = useSelector((state) => state.client)

  if (clientIsLogged) return <LayoutUser><Outlet /></LayoutUser>

  return <Navigate replace to={PublicRoutes.HOME} />
}

export default DatesGuard
