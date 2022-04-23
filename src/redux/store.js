import { configureStore } from '@reduxjs/toolkit'
import listReducer from './listSlice'
import picsReducer from './picSlice'

export const store = configureStore({ reducer: {
    lists: listReducer,
    picsList: picsReducer,
  } })

