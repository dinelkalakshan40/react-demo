import {combineReducers, createStore} from "redux";
import {CustomerReducer} from "../Reducers/CustomerReducer.tsx";


const rootReducer = combineReducers({
    customer : CustomerReducer
})
export const store = createStore(rootReducer);