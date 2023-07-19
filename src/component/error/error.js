import React from 'react'
import { VscError } from "react-icons/vsc";
import "./error.css"
function Error() {
  return (
    <div className='error'>
      <VscError/>
      <h2 className='text-center mt-5 mb-5'> error: 404 </h2>
      <h3 className='text-center'> Page Not Found </h3>
    </div>
  )
}

export default Error
