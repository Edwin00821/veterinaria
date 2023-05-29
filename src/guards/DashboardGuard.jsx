import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '@/libs'
import { LayoutAdmin } from '@/components'

const DashboardGuard = () => {
  const { isLogged: adminIsLogged } = useSelector((state) => state.admin)

  if (adminIsLogged) return <LayoutAdmin><Outlet /></LayoutAdmin>

  return <Navigate replace to={PublicRoutes.HOME} />
}

export default DashboardGuard
