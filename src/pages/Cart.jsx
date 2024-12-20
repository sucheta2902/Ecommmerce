import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import CartTotal from '../component/CartTotal'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {products,currency,cartItem,update}=useContext(ShopContext)
  const [cartData,setCartData]=useState([])
const navigate=useNavigate()
  useEffect(()=>{
const tenp=[]
for (const items in cartItem){
  for(const item in cartItem[items]){
    if(cartItem[items][item] > 0){
      tenp.push({
        _id:items,
        size:item,
        quantity:cartItem[items][item]
      })
    }
  }
}
setCartData(tenp)
  },[cartItem])
  return (
    <div className=' items-center md:px-20 max-w-screen-2xl container px-4 mx-auto'>
      <div className='border-y pt-14 items-center'>
      <h1 className='text-4xl mb-3 uppercase '>Your Cart</h1>
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productData=products.find((product)=>product._id === item._id)
            return(
              <div className='grid grid-cols-2 justify-between '>
                <div className='flex flex-col justify-evenly'>
                <div className='flex items-start gap-6 justify-evenly'>
                  <img className='w-16 sm:w-20'src={productData.image[0]}/>
                  <p>{productData.name}</p>
                 
                 <div className='flex items-center gap-7'>
                  <p>{item.size}</p>
                  <p>{currency}{productData.price}</p>
                  <input className='max-w-10 px-1 py-2 bg-slate-50' defaultValue={item.quantity} min={1} type='number' onChange={(e)=>e.target.value === '' || e.target.value === "0" ? null : update(item._id,item.size,Number(e.target.value))}/>
                  <img className='w-4' src={assets.bin_icon} onClick={()=>update(item._id,item.size)}/>
                  </div>
                 
                </div>
          
              
                
                
                </div>
              
                </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'> 
            <button className='bg-black px-8 py-3 text-white my-4' onClick={()=>navigate('/place-order')}>PROCEED TO CHECK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart