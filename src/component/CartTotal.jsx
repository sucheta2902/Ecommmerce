import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const{currency,Delivery_fee,getCart}=useContext(ShopContext)
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <h1>CART DETAILS</h1>

        </div>
        <div className='flex flex-col mt-2 '>
            <div className='flex justify-between'>
                <p>SUBTOTAL</p>
                <p>{currency}{getCart()}.00</p>

            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Shipping fee</p>
    
    
    <p>{currency} {Delivery_fee}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <b>Total</b>
                <p>{currency} {getCart() === 0 ? 0 : getCart() + Delivery_fee}.00</p>
                
            </div>

        </div>

    </div>
  )
}

export default CartTotal