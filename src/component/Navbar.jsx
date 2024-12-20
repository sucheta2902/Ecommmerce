import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {
    const[togg,setTogg]=useState(false)
    const {setShowSearch,getTotal}=useContext(ShopContext)
    const NavItem=[
        {link:"Home",path:""},
        {link:"Collection",path:"Collection"},
        {link:"About",path:"About"},
        {link:"Contact",path:"Contact"},
    ]
  

 

    
  return (
    <div className=' items-center md:px-20 max-w-screen-2xl container px-4 mx-auto'>
        <div className='flex justify-between items-center mt-3'>
      <Link to="/"> <img src={assets.logo} className='w-36'/></Link>  
        <ul className='md:flex hidden space-x-3 cursor-pointer'>
        {
            NavItem.map(({link,path})=>(
                <div>
                     <NavLink to={path} key={link} className="items-center text-2xl gap-8"  >{link}</NavLink>
                     <hr className='w-2/4 h-[1.5px] border-none bg-slate-400 hidden'/>
                </div>
               
            ))
        }
        </ul>
       <div className='flex items-center gap-6'>
        <Link to="/collection">
        <img src={assets.search_icon} onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer'/></Link>
       
<div className='group relative'>
   <Link to="/login"><img src={assets.profile_icon} className='w-5 cursor-pointer'/></Link> 
 
    <div className='group-hover:block absolute dropdown-menu right-0 pt-4 hidden'>
        <div className='flex flex-col w-36 px-3 py-4'>
            <p className='cursor-pointer hover:text-red-300'>Profile</p>
            <p className='cursor-pointer hover:text-red-300'>My Order</p>
            <p className='cursor-pointer hover:text-red-300'>Logout</p>

        </div>

    </div>

</div>
<Link to="/cart" className='relative'>
<img  src={assets.cart_icon} className='w-5'/>
<p className='right-[-5px] bottom-[-5px] absolute text-center bg-blue-400 rounded-full text-[15px]  w-4'>{getTotal()}</p>
</Link>

<div className='md:hidden'>
            <button onClick={()=>setTogg(true)} className='focus:outline-none focus:text-grey-300'>
            {
                togg ? (<FaXmark  className='w-6 h-6 '/>):(<FaBars />)
            }
            </button>
        </div>
        
       </div>
        </div>
       <div className={`space-y-4 pt-20 px-4 py-3 pb-5 ${togg ? "block bg-red-700 top-0 right-0 fixed":"hidden"}`}>
       {
            NavItem.map(({link,path})=>(
                <div>
                     <NavLink to={path} key={link} className="items-center" onClick={()=>setTogg(false)}>{link}</NavLink>
                     <hr className='w-2/4 h-[1.5px] border-none bg-slate-400 hidden'/>
                </div>
               
            ))
        }

       </div>
    </div>
  )
}

export default Navbar