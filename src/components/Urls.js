// export default Ulrs;
import React from "react";
import { useDispatch, useSelector } from "react-redux"
import {selectUrl, copied} from "../redux/reducers/urlSlice"

const Urls = () =>{
  const dispatch = useDispatch()
  const handleUrls = (e) =>{
    e.preventDefault();
    dispatch(copied())
  }
  const url = useSelector(selectUrl)
  return(
    <div className="short-url-container" >
      <h1> this is the short url :  <span className="short_url"> {url.urlName}</span></h1>
      <button className="copied_btn" onClick={(e)=> handleUrls(e)}> Copied </button>  
    </div>
  )
}

export default Urls;