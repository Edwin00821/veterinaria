import React from 'react'
import Navbar from './../components/navbar'

const FilesDash = () => {
  return (
    <div className='flex h-screen w-screen'>
      <Navbar />
      <div className='flex h-full w-[85%] items-center bg-red-500'>
        Archivos
      </div>
    </div>
  )
}

export default FilesDash
