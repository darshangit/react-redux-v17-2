import { createSlice } from "@reduxjs/toolkit"

const initialState = { toggleCart: true}

const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        toggle(state) {
            state.toggleCart = !state.toggleCart;
        }
    }
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;