import { createSlice } from "@reduxjs/toolkit";

let initialState = [
    {
        id: 'NjgxOU1YUDA3NDA=6819MXP0740',
        name: 'john',
        age: 50,
    },
    {
        id: 'NDg2NWRsaDk5ODE=4865dlh9981',
        name: 'tim',
        age: 30,
    },
    {
        id: 'NzI0NmRjczM2NjY37246dcs36667',
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
        },
        editItem: (state, action) => {
            if (state.find(value => value.id === action.payload.id)) {
                return state.map(item => item.id === action.payload.id ? action.payload : item)
            }
        },
        delItem: (state, action) => {
            if (state.find(value => value.id === action.payload)) {
                return state.filter(value => value.id !== action.payload)
            }
        }
    }
});

export const {
    addNewItem,
    editItem,
    delItem,
} = MainSlice.actions;
export default MainSlice.reducer;