import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Order = () => {
  const {products,currency}=useContext(ShopContext)
  return (
    <div className='item-center md:px-20 max-w-screen-2xl container px-4 mx-auto'>
      <div className='border-t pt-16'>
<div className='text-2xl'>
  <h1>My Order</h1>
</div>
{
  products.slice(1,4).map((item,index)=>(
<div className='flex flex-col md:flex-row ' key={index}>
<div className='flex items-start gap-6'>
  <img src={item.image[0]} className='w-16 sm:w-20'/>
  <div>
    <p className='sm:text-base font-medium'>{item.name}</p>
    <div className='flex items-center mt-2 gap-4'>
      <p>{currency}{item.price}</p>
      <p>Quantity: 1</p>
      <p>Size : M</p>
    </div>
    <p>Date : <span className='text-gray-300'>29/9/2000</span></p>
  </div>
  
  </div>
  <div className='md:w-1/2 flex justify-between'>
  <div className='flex items-center gap-2'>
<p className='min-w-2 h-2 rounded-full bg-green-300'></p>
<p className='md:text-base'>Ready to ship</p>
  </div>
  <button>Track Order</button>
    </div>
</div>
  ))
}

      </div>

    </div>
  )
}

export default Order