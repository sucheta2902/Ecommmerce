import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='items-center md:px-20 max-w-screen-2xl container px-4 mx-auto'>
<div className='flex md:flex-row flex-col items-center justify-center py-10 space-y-2 border-blue-300 border h-[570px] '>
    
    <div className='md:w-1/2 w-full my-7 '>
    <div className='items-center justify-center'>
        <div className='py-6 items-center flex flex-col  justify-center'>
          <div className='flex items-center justify-center gap-2 '>
            <hr className='w-8 md:w-11 h-[2px] border-none bg-slate-400 '/>
            <p className='text-xl'>Our Sellers</p>
          </div>
        <h1 className=' prata-regular md:text-5xl text-2xl '>Latest <span className=' text-red-500 space-y-4'>Arrival</span></h1>
        <hr className='w-2/4 h-[1.5px] border-none bg-slate-400 mb-5'/> 
        </div>
        
    </div>
    </div>
    <div className='md:w-1/2 w-full my-7' >
    
    <div className='items-center justify-center '>
        <div className='py-6 items-center flex flex-col justify-center'>
        <img src={assets.hero_img} className='w-full  '/>
        </div>
        
    </div>
    </div>
</div>
    </div>
  )
}

export default Hero