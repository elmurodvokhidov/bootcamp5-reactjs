import { createSlice } from "@reduxjs/toolkit";

let initialState = [
    {
        id: 1,
        name: 'john',
        age: 50,
    },
    {
        id: 2,
        name: 'tim',
        age: 30,
    },
    {
        id: 3,
        name: 'bob',
        age: 48,
    },
]

const MainSlice = createSlice({
    name: 'MainSlice',
    initialState,
    reducers: {
        addNewItem: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const {
    addNewItem,
} = MainSlice.actions;
export default MainSlice.reducer;