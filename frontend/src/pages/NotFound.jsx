import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center bg-gray-200'>
      <h1 className='sm:text-[150px] text-[80px] font-thin text-orange-500 '>OOPS!</h1>
      <p className='sm:mt-[-70px] sm:mb-6 mb-4 text-xs sm:text-lg mt-[-35px] bg-gray-200 sm:p-2 '>404 - THE PAGE CAN'T BE FOUND</p>
      <button onClick={()=>{ navigate('/')}} className='uppercase outline:none sm:text-lg text-sm bg-orange-500 px-4 py-1 rounded-sm text-white hover:bg-orange-400 transition duration-300 ease-in-out cursor-pointer'>go to home page</button>
    </div>
  )
}

export default NotFound
