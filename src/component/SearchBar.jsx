import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)

const[visi,setVisi]=useState(false)
const location=useLocation()

useEffect(()=>{
if(location.pathname.includes('collection') ){
  setVisi(true)
}else{
  setVisi(false)
}
},[location])

  return showSearch && visi? (
    <div className=' items-center md:px-20 max-w-screen-2xl container px-4 mx-auto'>
<div className='border-t border-b bg-gray-50 text-center py-5'>
    <div className='justify-center inline-flex px-5 items-center border border-gray-400 sm:w-1/2 w-3/4 rounded-full '>
        <input  value={search} onChange={(e)=>setSearch(e.target.value)} className='outline-none bg-inherit flex-1 px-5 rounded-full py-4'/>
        <img src={assets.search_icon} className='w-4'/>
    </div>
<img src={assets.cross_icon} onClick={()=>setShowSearch(false)} className='w-3 inline cursor-pointer gap-3' />
</div>
    </div>
  ):null
}

export default SearchBar