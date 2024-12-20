import React from 'react'
import { assets } from '../assets/assets'


const Contact = () => {
  return (
    <div className='items-center md:px-20 max-w-screen-2xl container px-4 mx-auto' >
<div className='flex text-center justify-center items-center my-8 gap-2'>
<h1 className='text-center text-4xl'>Contact Us</h1>
<hr className='w-[50px] bg-black h-1'/>
</div>

<div className='flex md:flex-row flex-col justify-center space-y-9'>
  <div className='w-full md:w-1/2'>
    <img src={assets.contact_img} className='md:max-w-[480px] w-full'/>
  </div>
  <div className='flex flex-col justify-center items-start gap-4'>
    <b className='text-2xl'>Our Store</b>
<p>54709 Willms Station
Suite 350, Washington, USA</p>
<b>Tel:9073862693</b>
<p>Email: contactsucheta19@gmail.com</p>
<button className='px-8 border py-4 hover:bg-black hover:text-yellow-100 bg-slate-50 border-black'>Explore Jobs</button>
  </div>

</div>
     
    </div>
  )
}

export default Contact