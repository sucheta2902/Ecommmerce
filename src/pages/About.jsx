import React from 'react'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div className='items-center md:px-20 max-w-screen-2xl container px-4 mx-auto'>
      <div className='pt-8 text-center text-4xl plata-regular'>
        <h1>About Us</h1>
      </div>
      <div className='flex my-10 md:flex-row flex-col gap-16'>
        <div>
          <img src={assets.about_img} className='w-full md:max-w-[450px]'/>
        </div>
<div className='flex flex-col justify-center md:w-2/4 my-10 gap-6'>
  <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
  <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
  <b className='text-gray-600'>Our Misson</b>
  <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
</div>

      </div>
      <div className='mt-9 flex items-center gap-1'>
  <h1>WHY CHOOSE US</h1>
  <hr  className='w-[100px] bg-black h-1'/>
</div>
<div className='flex md:flex-row flex-col mb-20 mt-9 gap-6' >
  <div className='border flex flex-col px-10 md:px-16 sm:py-20 gap-6'>
    <b>Quality Assurance:</b>
    <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
  </div>
  <div className='border flex flex-col px-10 md:px-16 sm:py-20 gap-6'>
    <b>Convenience:</b>
    <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
  </div>
  <div className='border flex flex-col px-10 md:px-16 sm:py-20 gap-6'>
    <b>Exceptional Customer Service::</b>
    <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
  </div>

</div>
    </div>
  )
}

export default About