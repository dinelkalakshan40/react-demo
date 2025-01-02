import {Customer} from "../model/Customer.tsx";


export const initialState = '';
export function CustomerReducer (state = initialState, action: {type: string, payload: Customer}) {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return [...state, action.payload]
        /*
        case 'DELETE_CUSTOMER':
            return state.slice(0,-1);
        case 'DELETE_CUSTOMER_BY_EMAIL':
            return state.filter((customer: Customer) => customer.email !== action.payload.email);
        case 'UPDATE_CUSTOMER':
            return state.map((customer: Customer) => customer.email === action.payload.email ? action.payload : customer);
            return state.map((customer: Customer) => customer.email === action.payload.email ? action.payload : customer);*/
        default:
            return state;
    }
}