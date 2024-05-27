import React from 'react'
import loader from  "../assets/loading.gif"
const Loader = () => {
  return (
    <div className='d-flex justify-content-center vh-100 align-items-center'>
        <img src={loader} height={"60px"} width={"60px"}/>
    </div>
  )
}

export default Loader