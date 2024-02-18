import { configureStore } from "@reduxjs/toolkit"
import sessionDialogReducer from "./sessionDialogSlice"

const store = configureStore({
    reducer: {
        sessionDialog: sessionDialogReducer
    }
})

export default store;
