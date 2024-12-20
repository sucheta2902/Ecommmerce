import React from 'react'
import { assets } from '../assets/assets'

const Fotter = () => {
  return (
    <div  className=' items-center md:px-20 max-w-screen-2xl container px-4 mx-auto'>
        <div className='flex md:flex-row flex-col md:gap-40 mt-32 space-y-10 cursor-pointer '>
            <div className='flex flex-col'>
                <img src={assets.logo} className='w-36'/>
                <p className='mt-3 w-full md:w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='flex flex-col'>
               <h1 className='uppercase font-medium text-xl '>Company</h1>
               <ul className='flex flex-col cursor-pointer mt-4'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
               </ul>
            </div>
            <div className='flex flex-col'>
            <h1 className='uppercase font-medium text-xl'>Get In Touch</h1>
               <ul className='flex flex-col cursor-pointer mt-4'>
                <li>9073862693</li>
                <li>contactsucheta19@gmail.com</li>
                <li>Instagram</li>
               </ul>
            </div>
            
        </div>
        <div className='text-center mb-5 mt-10'>
                <hr/>
                <p>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
            </div>
    </div>
  )
}

export default Fotter