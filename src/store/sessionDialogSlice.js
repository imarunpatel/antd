import { createSlice } from "@reduxjs/toolkit";


export const sessionDialogSlice = createSlice({
    name: 'sessionDialog',
    initialState: {
        show: false,
    },
    reducers: {
        toggleSessionDialog: (state, action) => {
            console.log(action)
            state.show = action.payload.show;
        }
    }
})

export const { toggleSessionDialog } = sessionDialogSlice.actions;

export default sessionDialogSlice.reducer