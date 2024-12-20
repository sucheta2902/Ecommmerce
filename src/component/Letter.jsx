import React from 'react'

const Letter = () => {
    const handle=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='items-center md:px-20 max-w-screen-2xl container px-4 mx-auto justify-center'>
        <div className='flex flex-col items-center justify-center text-center mt-44'>
            <p className='text-2xl font-medium text-gray-800 md:text-4xl'>Subscribe now & get 20% off</p>
            <p className='text-gray-900 text-xl mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='flex flex-row space-y-3'>
               
                <form onSubmit={handle} className='flex flex-row space-y-3'>
                <input type='text' placeholder='Enter Your Email' className='w-full mx-auto pl-5 my-7 items-center outline-none'/>
                <button type='submit' className='px-10 py-4 bg-black text-white '>SUBSCRIBE</button>
                </form>
               
            </div>
        </div>
    </div>
  )
}

export default Letter