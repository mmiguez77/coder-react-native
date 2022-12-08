import { configureStore } from '@reduxjs/toolkit'
import { songSlice } from './slices/songSlice'

export const store = configureStore({
  reducer: {
    setSong: songSlice.reducer
  },
})