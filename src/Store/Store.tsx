import {configureStore} from "@reduxjs/toolkit";
import ChangeNameSlice from "../Reducers/CustomerSlice.ts"

export const store = configureStore({
    reducer: {
        changeName: ChangeNameSlice
    }
})