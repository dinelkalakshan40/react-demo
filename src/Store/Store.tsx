import {createStore} from "redux";
import {CountReducer} from "../Reducers/CountReducer.tsx";


export const store = createStore(CountReducer);