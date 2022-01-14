import {ActionTypes} from "../constants/action-types"

// action to select  the short  url
export const selectedShortUrl = (url) => {
    return {
      type: ActionTypes.SHORT_URL,
      payload: url,
    };
  };