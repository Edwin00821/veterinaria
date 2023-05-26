import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'
import { PublicRoutes, PrivateRoutes } from './libs'
import {
  AccountancyGuard,
  AuthGuard,
  DashboardGuard,
  DatesGuard,
  PublicGuard
} from './guards'
import {
  Home,
  Login,
  Signin,
  FourtyFour,
  // Citas
  AddDate,
  AddPet,
  DatingHistory,
  MyPets,
  ProfilePet,
  NextDates,
  // Contabilidad
  AddServices,
  FixedCosts,
  SalePoint,
  Storage,

  // Dashboard
  AccountancyDash,
  BackOfficeDash,
  DatesDash,
  FilesDash
} from './pages'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Public Routs */}
          <Route element={<PublicGuard />}>
            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.SIGNIN} element={<Signin />} />
          </Route>

          {/* Private Routs */}
          <Route element={<AuthGuard />}>
            {/* Citas Routs */}
            <Route element={<DatesGuard />}>
              <Route path={PrivateRoutes.ADD_DATES} element={<AddDate />} />
              <Route path={PrivateRoutes.ADD_PETS} element={<AddPet />} />
              <Route
                path={PrivateRoutes.DATING_HISTORY}
                element={<DatingHistory />}
              />
              <Route path={PrivateRoutes.MY_PETS} element={<MyPets />} />
              <Route
                path={PrivateRoutes.PROFILE_PET}
                element={<ProfilePet />}
              />
              <Route path={PrivateRoutes.NEXT_DATES} element={<NextDates />} />
            </Route>

            {/* Contabilidad Routs */}
            <Route element={<AccountancyGuard />}>
              <Route
                path={PrivateRoutes.FIXED_COSTS}
                element={<FixedCosts />}
              />
              <Route path={PrivateRoutes.INVENTARY} element={<Storage />} />
              <Route path={PrivateRoutes.SALE_POINT} element={<SalePoint />} />
              <Route
                path={PrivateRoutes.ADD_SERVICES}
                element={<AddServices />}
              />
            </Route>

            {/* Dashboard Routs */}
            <Route element={<DashboardGuard />}>
              <Route
                path={PrivateRoutes.ACCOUNTANCY}
                element={<AccountancyDash />}
              />
              <Route
                path={PrivateRoutes.BACK_OFFICE}
                element={<BackOfficeDash />}
              />
              <Route path={PrivateRoutes.DATES} element={<DatesDash />} />
              <Route path={PrivateRoutes.FILES} element={<FilesDash />} />
            </Route>
          </Route>

          <Route path='*' element={<FourtyFour />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        theme='light'
        position='top-right'
        hideProgressBar={false}
        autoClose={1000}
        newestOnTop={true}
        closeOnClick={true}
        draggable={true}
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={true}
        limit={0}
      />
    </Provider>
  </React.StrictMode>
)
