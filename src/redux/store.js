import { configureStore } from '@reduxjs/toolkit'
import addCartSlice from './slices/addCartSlice'

export const store = configureStore({
  reducer: {
    addCartSlice
  },
})