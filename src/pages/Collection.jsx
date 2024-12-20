import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from "../context/ShopContext"
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Collection = () => {
  const {products,currency,search,showSearch}=useContext(ShopContext)
   const [filteri,setFilter]=useState(false)
   const[filProduct,setProduct]=useState([])
   const [category,setCategory]=useState([])
   const [subCategory,setategory]=useState([])
   const[sortType,setType]=useState("relavent")

   const handle=(e)=>{
    if(category.includes(e.target.value)){
setCategory(prev =>prev.filter(item=> item !== e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
   }

const sortProduct=()=>{
  let fpCopy=filProduct.slice()
  switch(sortType){
    case 'low-high':
      setProduct(fpCopy.sort((a,b)=>(a.price - b.price)))
      break;
  
      case 'high-low':
        setProduct(fpCopy.sort((a,b)=>(b.price - a.price)))
        break;

    default:
      apply()
      app()
      break;
  }
}
   const handl=(e)=>{
    if(subCategory.includes(e.target.value)){
setategory(prev =>prev.filter(item=> item !== e.target.value))
    }
    else{
      setategory(prev=>[...prev,e.target.value])
    }
   }

   const apply=()=>{
    let copy=products.slice()
    if(category.length > 0){
      copy =copy.filter(item => category.includes(item.category))
    }
    if(showSearch && search){
  copy=copy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    setProduct(copy)
   }

  const app=()=>{
    let copy=products.slice()
    if(subCategory.length > 0){
      copy =copy.filter(item => subCategory.includes(item.subCategory))
    }
    setProduct(copy)
  }
   useEffect(()=>{
setProduct(products)
   },[])

   useEffect(()=>{
apply()

   },[category,search,showSearch])
   useEffect(()=>{
    app()
   },[subCategory])
   useEffect(()=>{
    sortProduct()
   },[sortType])
  return (
    <div  className=' items-center md:px-20 max-w-screen-2xl container px-4 mx-auto justify-center'>
      <div className='flex flex-col md:flex-row  relative gap-6 '>

      
        <div className='mt-20 min-w-60 '>
          <p  className='flex gap-2 items-center text-2xl ' onClick={()=>setFilter(!filteri)}>Filter
            <img className= {`h-3 md:hidden ${filteri ? "rotate-90" : "" } gap-4`} src={assets.dropdown_icon} />
          </p>
<div className={`border border-gray-200 pl-5 py-3  sm:w-full  `}>
  <p>Category</p>
  <div className='flex flex-col'>
  <p><input type='checkbox' value={"Men"} onChange={handle}/>Men</p>
<p><input type='checkbox' value={"Women"} onChange={handle}/>Women</p>
<p><input type='checkbox' value={"Kids"} onChange={handle}/>Kids</p>
  </div>

</div>

<div className='mt-12 '>
          
<div className={`border border-gray-200 pl-5 py-3  sm:w-full  `}>
  <p className='mb-2'>Type</p>
  <div className='flex flex-col'>
  <p><input type='checkbox' value={"Topwear"} onChange={handl}/>Topwear</p>
<p><input type='checkbox' value={"Bottomwear"} onChange={handl}/>Bottomwear</p>
<p><input type='checkbox' value={"Winterwear"} onChange={handl}/>Winterwear</p>
  </div>

</div>
</div>
      
      </div>
      <div className='flex-1'>
      <div className='flex  justify-between text-base sm:text-2xl mt-20 '>
        <div className='items-center flex justify-center'>
        <h1 className=''>ALL <span className='text-gray-700'>COLLECTION</span></h1>
        
        </div>
        
        <select className='border-2 border-gray-300 px-2 text-sm' onChange={(e)=>setType(e.target.value)}>
          <option value="relavent">Sort by: Relavent</option>
          <option value="low-high">Sort by: low-high</option>
          <option value="high-low">Sort by: high-low</option>
        </select>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3'>
        {
          filProduct.map((item)=>(
            <div className='gap-3 my-8' id={item._id}>
               <Link to={`/product/${item._id}`}>
              <img src={item.image[0]} className='hover:scale-105 transition ease-in-out gap-6'/>
<p>{item.name}</p>
<p>{currency}{item.price}</p>
</Link>
              </div>
          )

          )
        }

      </div>
    </div>
    </div>
   
    </div>
  
  )
}

export default Collection