import { configureStore } from '@reduxjs/toolkit'
import noteSlice from './slices/noteSlice'

export const store = configureStore({
  reducer: {
    noteSlice
  },
})