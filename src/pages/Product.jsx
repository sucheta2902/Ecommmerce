import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from "../context/ShopContext"
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
// import RelatedProduct from '../component/RelatedProduct'

const Product = () => {
  const {productId}=useParams()
  const {products,currency,addCart}=useContext(ShopContext)
  const[productData,setData]=useState(false)
  const[image,setImg]=useState('')
  const[size,setSize]=useState('')

  const[rel,setRel]=useState([])
  useEffect(()=>{
    if(products.length >0){
      let copy=products.slice()
      copy=copy.filter((item)=>productData.category === item.category)
      copy=copy.filter((item)=>productData.subCategory === item.subCategory)
      setRel(copy.slice(0,5))
    }
  },[productData])
 
  const fetch=async()=>{
    products.map((item)=>{
      if(item._id==productId){
        setData(item)
        setImg(item.image[0])
        return null
      }
    })
  

  }
  useEffect(()=>{
fetch()
  },[products])
  return productData ?(
    <div className=' items-center md:px-20 max-w-screen-2xl container px-4 mx-auto'>
      <div className='flex flex-col md:flex-row  gap-3  mt-16 justify-normal '>
      <div className='flex flex-row md:flex-col md:order-1 order-2'>
      {productData.image.map((item,index)=>(
        <img src={item} onClick={()=>setImg(item)} key={index} className='w-[24%] gap-2'/>
    

))}
</div>
<div className=' md:order-2 order-1'>
  <img src={image} className='w-[500px] h-auto'/>
</div>
<div className='order-3 gap-3 '>
  <h1 className='mt-2 font-medium text-2xl'>{productData.name}</h1>
  <div className='flex items-center gap-2'>
    <img src={assets.star_icon} className='w-3 5'/>
    <img src={assets.star_icon} className='w-3 5'/>
    <img src={assets.star_icon} className='w-3 5'/>
    <img src={assets.star_icon} className='w-3 5'/>
    <img src={assets.star_dull_icon} className='w-3 5'/>
    <p>(122)</p>
  </div>
<p className='text-3xl font-medium mt-5'>{currency}{productData.price}</p>
<p className='md:w-4/5 mt-5'>{productData.description}</p>
<p className='mt-5'>Select Size</p>
<div className='flex gap-2 mt-5'>
  {
    productData.sizes.map((item,index)=>(
      <button className={`px-4 py-2 bg-grey border ${item === size ? "border-orange-400":""}`} key={index} onClick={()=>setSize(item)}>{item}</button>
    ))
  }

</div>
<button className='px-8 py-3 bg-black active:bg-slate-100 text-white mt-4' onClick={()=>addCart(productData._id,size)}>ADD TO CART</button>
<hr className='sm:w-4/5 mt-8 bg-black'/>
<div className='flex flex-col mt-5'>
  <p>100% Original product.</p>
  <p>Cash on delivery is available on this product.</p>
  <p>Easy return and exchange policy within 7 days.</p>
</div>
</div>

      </div>
    <div className='mt-20'>
      <div className='flex'>
        <b className='border px-5 py-3 text-sm'>Descripton</b>
        <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
       
      </div>
      <div className='flex flex-col border px-6 py-6 gap-4 text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>

        </div>
        <div className='justify-items-center'>
        <div>
        <div className='mt-20 flex items-center mx-auto justify-center text-center'>
            <p className='text-center text-gray-500'>RELATED PRODUCTS</p>
            <hr className='w-[50px] bg-black'/>
        </div>
        
        <div className='grid grid-cols-2 md:grid-cols-5 '>
            {rel.map((item)=>(
              <div id={item._id}>
                  
                  <img src={item.image[0]} className='hover:scale-105 transition ease-in-out gap-6 '/>
<p>{item.name}</p>
<p>{currency}{item.price}</p>

             </div>
            ))}

 
         </div>
    </div>
        </div>
    </div>
    </div>
  ):<div className='opacity-0'></div>
}

export default Product