import { ActionTypes } from "../constants/action-types"

const initialState = {
    urls:[]
}
export const selectedShortUrlReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SHORT_URL:
        return { ...state, ...payload };
      
      default:
        return state;
    }
  };