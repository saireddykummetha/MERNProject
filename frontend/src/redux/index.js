
import { configureStore } from '@reduxjs/toolkit'
import  createproject  from './createproject'
import  fileCounterReducer  from './uploadproject'
import  project  from './uploadproject'
import userSliceReducer from './userSlice'

export const store = configureStore({
  reducer: {
    Project:createproject,
    upload:project,
    product: fileCounterReducer,
    user:userSliceReducer,
  }
})
