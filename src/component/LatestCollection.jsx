import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
const LatestCollection = () => {
    const {products,currency}=useContext(ShopContext)
    const[lat,setLat]=useState([])
    useEffect(()=>{
setLat(products.slice(0,10))
    },[])
  return (
    <div className=' items-center md:px-20 max-w-screen-2xl container px-4 mx-auto justify-center'>
      <div className='flex flex-col justify-center items-center sm:items-center w-full text-center  '>
      <div className='flex items-center flex-row justify-center mt-[100px] sm:items-center sm:justify-center w-full text-center' >
      <h1 className='text-3xl prata-regular uppercase w-full'>Latest <span className='text-red-500 uppercase prata-regular w-full'>Collection</span></h1>
      <hr className='w-8 md:w-11 h-[2px] border-none bg-slate-400 '/>
      </div>
      <p className='md:text-xl sm:text-xs leading-4 w-3/4 m-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
     </div>
     <div className='grid md:grid-cols-4 grid-cols-2 lg:grid-cols-5 gap-4'>
{
  lat.map((item)=>(
   
      <div className='overflow-hidden mt-9 text-center '>
        <Link to={`/product/${item._id}`}>
       {/* <p className='text-2xl'>curr</p> */}
       <div className='relative'>
       <img src={item.image[0]} className='hover:scale-105 transition ease-in-out   '/>
       <div class="absolute inset-0 bg-black opacity-50"></div>
       </div>
       
        <p>{item.name}</p>
          <p>{currency}{item.price}</p>
        </Link>
       
        </div>
        
      
  )

  )
}
</div>
    </div>
  )
}

export default LatestCollection