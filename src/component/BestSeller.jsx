import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
const BestSeller = () => {
    const {products,currency}=useContext(ShopContext)
    const[lat,setLat]=useState([])
    useEffect(()=>{
const best=products.filter((item)=>item.bestseller)
setLat(best.slice(0,5))
    },[])
  return (
    <div className=' items-center md:px-20 max-w-screen-2xl container px-4 mx-auto justify-center'>
<div className='text-center flex flex-col mt-14'>
    <div className='flex items-center justify-center'>
    <h1 className='text-3xl prata-regular uppercase '>Best <span className='text-red-500 uppercase prata-regular'>Sellers</span></h1>
    <hr className='w-8 md:w-11 h-[2px] border-none bg-slate-400 '/>
    </div>
    <p className='md:text-xl sm:text-xs leading-4 w-3/4 m-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
</div>
<div className='grid md:grid-cols-4 grid-cols-2 lg:grid-cols-5 gap-4'>
    {
        lat.map((item,index)=>(
<div className='mt-9' key={index}>
    <Link to={`/product/${item._id}`}>
    <img src={item.image[0]} className='hover:scale-105 transition ease-in-out'/>
<p>{item.name}</p>
<p>{currency}{item.price}</p></Link>

</div>
         ) )
    }
    </div>
    </div>
  )
}

export default BestSeller