import React from 'react'
import Navbar from '../components/navbar'

const BackofficeDash = () => {
  return (
    <div className='flex h-screen w-screen'>
      <Navbar />
      <div className='flex h-full w-[85%] items-center bg-red-500'>
        Backoffice
      </div>
    </div>
  )
}

export default BackofficeDash
