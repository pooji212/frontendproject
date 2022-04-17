import {configureStore} from '@reduxjs/toolkit'
import  userData from './slices/userSlice'
export const store = configureStore({
    reducer : {
        user : userData
    }
})