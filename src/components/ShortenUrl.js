import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const ShortenUrl = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  
  const handleChange = e => setText(e.target.value)
  //go to urls component 
  const ShortenUrl = (text) =>{
   
  }
 

  return (
      <div className='new-url-container'>
         <input
            type="text"
            placeholder="Shorten a link here..."
            autoFocus={true}
            value={text}
            onChange={handleChange}
             
         />
         <button onClick={ShortenUrl}>  Shorten it!</button>
      </div>
   
  )
}

export default ShortenUrl