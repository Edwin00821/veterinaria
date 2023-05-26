import { configureStore } from '@reduxjs/toolkit'
import { clientReducer, adminReducer, themeReducer } from './states'

export default configureStore({
  reducer: {
    themeMode: themeReducer,
    client: clientReducer,
    admin: adminReducer
  }
})
