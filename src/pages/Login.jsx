import React, { useState } from 'react'

const Login = () => {
  const [curr,setCur]=useState("Login")
  const handle=(e)=>{
    e.preventDefault()
  }
  return (
    <div className='items-center md:px-20 max-w-screen-2xl container px-4 mx-auto'>
      <form className='flex flex-col items-center mt-32 m-auto'onSubmit={handle}>
        <div className='flex items-center'>
        <p className='text-4xl prata-regular'>{curr}</p>
        <hr className='w-8 h-[1.5px] bg-gray-500 border-none'/>
        </div>
      
        {curr === "Login" ? "" : <input type="text" className='w-full px-3 py-2 border border-gray-500 mt-4 md:w-[450px]' placeholder='Name' required/>}
        <input type="email" className='w-full px-3 py-2 border border-gray-500 md:w-[450px] mt-4' placeholder='Email' required/>
<input type="password" className='w-full px-3 py-2 border border-gray-500 md:w-[450px] mt-4' placeholder='Password' required/>
<div className='w-full  flex mt-10 cursor-pointer justify-center gap-[32px] '>
  <p>Forgot Your Password</p>
  {
    curr === "Login" ? <p onClick={()=>setCur("SignUp")}> Create Account</p>:<p onClick={()=>setCur("Login")}> Login Here</p>
  }

</div>
<button className='bg-black font-light px-8 py-2 mt-4 text-white'>{curr  === "Login" ? "Sign In" :" Sign Up"}</button>

      </form>
    </div>
  )
}

export default Login