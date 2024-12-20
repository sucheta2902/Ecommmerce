import React, { useState } from 'react'
import CartTotal from '../component/CartTotal'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const [method,setMethod]=useState('cod')
  const navigate=useNavigate()
  return (
    <div className= 'items-center md:px-20 max-w-screen-2xl container px-4 mx-auto'>
      <div className='flex flex-col sm:flex-row sm:pt-14 pt-5 gap-8'>
        <div className=' flex flex-col w-full sm:w-1/2 gap-5'>

          <div className='text-2xl my-3'>
<h1>Card Infomation</h1>
          </div>
          <div className='flex gap-3'>
            <input type="text" placeholder='First Name' className='w-full border border-gray-300 px-3.5 py-1.5'/>
            <input type="text" placeholder='Last Name' className='w-full border border-gray-300 px-3.5 py-1.5'/>

          </div>
          <input type="email" placeholder='Email Address' className='w-full border border-gray-300 px-3.5 py-1.5'/>
          <input type="text" placeholder='Street' className='w-full border border-gray-300 px-3.5 py-1.5'/>
          <div className='flex gap-3'>
            <input type="text" placeholder='City' className='w-full border border-gray-300 px-3.5 py-1.5'/>
            <input type="text" placeholder='State' className='w-full border border-gray-300 px-3.5 py-1.5'/>

          </div>
          <div className='flex gap-3'>
            <input type="Number" placeholder='Zip Code' className='w-full border border-gray-300 px-3.5 py-1.5'/>
            <input type="text" placeholder='Country' className='w-full border border-gray-300 px-3.5 py-1.5'/>

          </div>
          <input type="number" placeholder='Phone' className='w-full border border-gray-300 px-3.5 py-1.5'/>
        </div>
{/* {...right} */}
<div className='mt-12 w-full sm:w-1/2 px-7'>
<div className='space-y-4'>
  <div className='flex items-center'>
  <h1 className='uppercase text-2xl w-full'>CART <span className='text-2xl text-slate-500'>TOTAL</span></h1>
  <hr className='w-1/2 bg-slate-400'/>
  </div>

  <CartTotal/>

</div>
<div className='flex flex-col mt-6'>

  <h1 className='text-2xl'>PayMent mehod</h1>
  <div className='flex flex-col sm:flex-row gap-5 mt-6 items-center cursor-pointer'>
    <div onClick={()=>setMethod('stripe')}>
    <p className={`border bg-slate-500  rounded-full `}></p>
    <img src={assets.stripe_logo} className={`mx-4 h-5 ${method === "stripe" ? "bg-green-300" :""}` }  />
    </div>
    <div onClick={()=>setMethod('razorPay')}>
    <p className={`border bg-slate-500  rounded-full `}></p>
    <img src={assets.razorpay_logo} className={`mx-4 h-5 ${method ==="razorPay" ? "bg-green-300" :""} `} />
    </div>
    <div onClick={()=>setMethod('cod')} >
    <p className={`mx-4 h-5 ${method ==="cod" ? "bg-green-300" :""} `} >Cash on Delivery</p>
    </div>
    

  </div>
  <div className='justify-end text-end mt-6'>
    <button className='bg-black px-10 py-3 text-white' onClick={()=>navigate("/order")}>Place Order</button>
  </div>
</div>

</div>
      </div>

    </div>
  )
}

export default PlaceOrder