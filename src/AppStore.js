import { configureStore } from "@reduxjs/toolkit";
import Cartreduser from './CartSlice'
const AppStore =configureStore({
    reducer:{
        cart:Cartreduser
    }
})

export default AppStore;