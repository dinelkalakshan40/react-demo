export const initialState ={
    value :0,
    visibility :true
}
export function CountReducer(state= initialState,action:{type:string}){
    switch (action.type) {
        case 'INCREMENT':
            return{...state,value: state.value+1};
        case 'DECREMENT':
            return{...state,value: state.value-1};
            case 'TOGGLE':
                return {...state,visibility: !state.visibility};
        default:
            return state;
    }
}

