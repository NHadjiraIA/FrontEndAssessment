import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_SHORT_URL } from "./CONSTANTS";
 



  // get shot url by long url 
  export const getShortUrlByUrl = (url) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_SHORT_URL(url))
        .then(res => {
            resolve(res.data.result);
            console.log('in service',res.data.result)
        })
        .catch((err) => {
          console.log("get short url by url  > axios err=", err);
          reject("Error in short url  by long url  axios!");
        });
      } catch (error) {
        console.error("in url service  > get short url, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };