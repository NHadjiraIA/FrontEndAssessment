import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./reducers/urlSlice";
export default configureStore({
    reducer:{
        url:urlReducer,
    }
})