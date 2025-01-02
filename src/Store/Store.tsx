import {configureStore} from "@reduxjs/toolkit";
import CounterSlice from "../Reducers/CustomersSlice"

export const store=configureStore({
    reducer:{
        counter:CounterSlice
    }
})