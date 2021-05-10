import { createSlice } from "@reduxjs/toolkit"

const initialState = { isCartPresent: false}

const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        toggle(state) {
            state.isCartPresent = !state.isCartPresent;
        }
    }
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;