import React, { createContext, useEffect, useState } from 'react'
import { products } from '../assets/assets'
import {  toast } from 'react-toastify';
export const ShopContext = createContext() 
const ShopContextProvider=(props)=>{
    const currency="$";
    const Delivery_fee=10
    const[search,setSearch]=useState('')
    const [showSearch,setShowSearch] =useState(false)
  const[cartItem,setItem]=useState({})

const addCart=async(itemId,size)=>{
    if(!size){
        toast.error("Select Product Size")
        return
    }
       let cartData=structuredClone(cartItem)

       if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] +=1
        }
        else{
            cartData[itemId][size] =1
        }
       }else{
        cartData[itemId]={}
        cartData[itemId][size] =1
       }
       setItem(cartData)
}

const getTotal=()=>{
    let total=0
    for(const items in cartItem){
        for(const item in cartItem[items]){
            try{
                if(cartItem[items][item] > 0){
                    total +=cartItem[items][item]
                }
            }catch (error){

            }
        }
    }
    return total
}

const update=async(itemId,size,quantity)=>{
    let cartData=structuredClone(cartItem)
    cartData[itemId][size]=quantity
    setItem(cartData)
}


useEffect(()=>{
console.log(cartItem)
},[cartItem])



const getCart=()=>{
    let total=0;
    for(const items in cartItem){
        let itemInfo= products.find((product)=>product._id === items)
        for (const item in cartItem[items]){
            try{
                if(cartItem[items][item] > 0){
                    total +=itemInfo.price * cartItem[items][item]
                }
            }
            catch(error){

            }
        }
    }
    return total
}
    const value={
products,currency,Delivery_fee,
search,setSearch,showSearch,setShowSearch,cartItem,setItem,addCart,getTotal,update,getCart
    }
    return (
        <ShopContext.Provider value={value}>
{props.children}
        </ShopContext.Provider>
      )
}
export default ShopContextProvider
 

