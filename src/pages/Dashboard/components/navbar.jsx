import React from 'react'
import {
  BiCalendarAlt,
  BiSitemap,
  BiMoneyWithdraw,
  BiFileBlank
} from 'react-icons/bi'
import { Link } from 'react-router-dom'
// import Link from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex h-screen w-[15%]'>
      <div className='ml-1/6 flex h-full w-full items-center'>
        <div className='bg-green h-6/7 rounded-1/7 w-full'>
          <div className='txt1 flex h-1/5 w-full items-center justify-center text-4xl font-semibold text-white'>
            DashBoard
          </div>

          <div className='txt2 flex h-1/6 w-full items-center justify-center text-left text-2xl text-white'>
            <BiCalendarAlt />
            <Link to={'/'}>
              <p className='m-1/6'>Citas</p>
            </Link>
          </div>

          <div className='txt3 flex h-1/6 w-full items-center justify-center text-left text-2xl text-white'>
            <BiSitemap />
            <Link to={'/backoffice'}>
              <p className='m-1/6'>Back Office</p>
            </Link>
          </div>
          <div className='txt4 flex h-1/6 w-full items-center justify-center text-left text-2xl text-white'>
            <BiMoneyWithdraw />
            <Link to={'/accountancy'}>
              <p className='m-1/6'>Contaduría</p>
            </Link>
          </div>
          <div className='txt5 flex h-1/6 w-full items-center justify-center text-left text-2xl text-white'>
            <BiFileBlank />
            <Link to={'/files'}>
              <p className='m-1/6'>Archivos</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
