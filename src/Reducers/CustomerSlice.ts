import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ''
};
const ChangeNameSlice = createSlice({
    name: 'value',
    initialState: initialState,
    reducers: {
        changeName: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeName } = ChangeNameSlice.actions;
export default ChangeNameSlice.reducer;