import { useState } from 'react'
import { RxTriangleDown } from 'react-icons/rx'

const EspecieSelect = () => {
  const [Change, SetChange] = useState(false)
  return (
    <div className='relative'>
      <button
        className='z-50 flex h-[5vh] w-[15vh] items-center justify-center rounded-[1vw] border-[.5vh] border-primary text-[#757474]'
        onClick={() => {
          Change ? SetChange(false) : SetChange(true)
        }}
      >
        <p className='mx-3 text-[1.8vh] font-bold text-[#757474] '>Especie</p>
        <RxTriangleDown />
      </button>
      <div
        className={
          Change
            ? 'absolute top-[5.5vh] z-50 flex h-auto w-full  flex-col items-center justify-center rounded-[2vw] border-[.5vh] border-primary bg-[#d9d9d9] p-[.2vh]'
            : 'h-0 w-0 opacity-0'
        }
      >
        <button
          className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-primary p-[.5vh] text-[2vh] font-bold text-[#757474]'
          onClick={() => {
            SetChange(false)
          }}
        >
          Perros
        </button>
        <button
          className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-primary p-[.5vh] text-[1.7vh] font-bold text-[#757474]'
          onClick={() => {
            SetChange(false)
          }}
        >
          Gatos
        </button>
        <button
          className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-primary p-[.5vh] text-[1.7vh] font-bold text-[#757474]'
          onClick={() => {
            SetChange(false)
          }}
        >
          Mini Pigs
        </button>
        <button
          className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-primary p-[.5vh] text-[1.7vh] font-bold text-[#757474]'
          onClick={() => {
            SetChange(false)
          }}
        >
          Conejos
        </button>
        <button
          className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-primary p-[.5vh] text-[1.7vh] font-bold text-[#757474]'
          onClick={() => {
            SetChange(false)
          }}
        >
          Hurones
        </button>
      </div>
    </div>
  )
}

export default EspecieSelect
