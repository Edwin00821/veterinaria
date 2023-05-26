import React from 'react'
import { Dates } from './'

const ListOfDates = ({ dates }) => {
  return (
    <ul
      aria-label='Alternative changelog feed'
      role='feed'
      className='relative flex flex-col gap-12 py-12 pl-6 before:absolute before:left-6 before:top-0 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:bottom-6 after:left-6 after:top-6 after:-translate-x-1/2 after:border after:border-slate-200 lg:pl-0 lg:before:left-[8.5rem] lg:after:left-[8.5rem]'
    >
      <Dates />
      <Dates />
      <Dates />
      <Dates />
      <Dates />
    </ul>
  )
}

export default ListOfDates
