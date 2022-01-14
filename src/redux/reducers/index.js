import {combineReducers} from "redux";
import { selectedShortUrlReducer } from "./urlReducer";

const reducers = combineReducers({
    shortLongUrl: selectedShortUrlReducer,
})

export default reducers;