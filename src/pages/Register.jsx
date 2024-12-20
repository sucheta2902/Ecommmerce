import React, { useState } from 'react'

const Register = () => {
  const [curr,setCur]=useState("SignUp")
  return (
    <div className='items-center md:px-20 max-w-screen-2xl container px-4 mx-auto'>
      <form className='flex flex-col items-center mt-32 m-auto'>
        <div className='flex items-center'>
        <p className='text-2xl prata-regular'>{curr}</p>
        <hr className='w-8 h-[1.5px] bg-gray-500 border-none'/>

        </div>
        <input type="text" className='w-full px-3 py-2 border border-gray-500 md:w-[450px] mt-4' placeholder='Name' required/>
        {curr === "SignUp " ? "" :<input type="email" className='w-full px-3 py-2 border border-gray-500 mt-4 md:w-[450px]' placeholder='Email' required/>}

<input type="password" className='w-full px-3 py-2 border border-gray-500 md:w-[450px] mt-4' placeholder='Password' required/>

      </form>
    </div>
  )
}

export default Register