import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { shorten } from "../redux/reducers/urlSlice"
import {getShortUrlByUrl} from "../services/urlService"

const ShortenUrl = () => {
  const [urlName, setUrlName] = useState('')
  const dispatch = useDispatch()

  
  
 
 
 const handleSubmit = (e) =>{
    e.preventDefault();
    getShortUrlByUrl(urlName).then((result) => {
      console.log(result.full_short_link)
      dispatch(shorten({
         urlName:result.full_short_link
      }))
    });
    
 }

  return (
      <div className='shorten-url-container'>
         <form className='shorten_form' onSubmit={(e)=> handleSubmit(e)}>
          <h1>here url</h1>
         <input
            type="urlName"
            placeholder="Shorten a link here..."
            value={urlName}
            onChange={(e)=> setUrlName(e.target.value)}
         />
         <button type="submit"  className='submit_shorten_btn'   >  Shorten it!</button>
         </form>
      </div>
   
  )
}

export default ShortenUrl