import { createSlice } from '@reduxjs/toolkit'

export const ThemeEmptyState = {
  theme: false
}

export const themetSlice = createSlice({
  name: 'theme',
  initialState: ThemeEmptyState,
  reducers: {
    // setThemeMode: (state, action: ActionTheme) => ( state = action.payload),
    setThemeMode: (state, action) => ({
      ...state,
      theme: action.payload
    })
  }
})

export const { setThemeMode } = themetSlice.actions

export default themetSlice.reducer
