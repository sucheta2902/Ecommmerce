import React from 'react'
import { assets } from '../assets/assets'


const BestPolicy = () => {
  return (
    <div className='items-center md:px-20 max-w-screen-2xl container px-4 mx-auto justify-center'>
<div className='flex md:flex-row flex-col justify-around gap-12 items-center text-center mt-60'>
    <div>
<img src={assets.exchange_icon} className='w-12 m-auto mb-5'/>
<p className='font-semibold'>Easy Exchange Policy</p>
<p className='text-gray-400'>We offer hassle free exchange policy</p>
    </div>
    <div>
<img src={assets.quality_icon} className='w-12 m-auto mb-5'/>
<p className='font-semibold'>7 Days Return Policy</p>
<p className='text-gray-400'>We provide 7 days free return policy</p>
    </div>
    <div>
<img src={assets.support_img} className='w-12 m-auto mb-5'/>
<p className='font-semibold'>Best customer support</p>
<p className='text-gray-400'>we provide 24/7 customer support</p>
    </div>
</div>
    </div>
  )
}

export default BestPolicy