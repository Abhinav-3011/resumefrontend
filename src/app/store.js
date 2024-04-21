import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Loginboolencheck'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})