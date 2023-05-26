import React from 'react'
import { MdPets } from 'react-icons/md'
import { useState } from 'react'
import { useEffect } from 'react'

export const Input = ({ name, type, min, max }) => {
  const [visibility, setVisibility] = useState(false)
  useEffect(() => {
    if (type === 'date') {
      setVisibility(true)
    } else {
      setVisibility(false)
    }
  }, [type])

  return (
    <div className='flex h-full w-full flex-col gap-2 px-10 py-2'>
      <label className='text-green text-xl font-semibold' htmlFor={name}>
        {name}
      </label>
      <input
        type={type}
        className='rounded-md border border-gray-700 p-2'
        min={`${type === 'date' ? { min } : {}}`}
        max={`${type === 'date' ? { max } : {}}`}
      />
    </div>
  )
}

export const Select = ({ name, options, onValorSeleccionado }) => {
  const [valorSeleccionado, setValorSeleccionado] = useState('')

  const handleSelectChange = (event) => {
    const valor = event.target.value
    setValorSeleccionado(valor)
    onValorSeleccionado(valor)
  }
  return (
    <div className='flex h-full w-full flex-col justify-center gap-2 px-10 py-2'>
      <label className='text-green text-xl font-semibold' htmlFor={name}>
        {name}
      </label>
      <select
        name={name}
        value={valorSeleccionado}
        onChange={handleSelectChange}
        className='rounded-md border border-gray-700 p-2'
      >
        {options?.map((option) => (
          <option value={option.value} key={option.key}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export const SquarePets = (props = { idPet: {}, namePet: {} }) => {
  const idPet = props.idPet
  const namePet = props.namePet
  useEffect(() => {
    console.log(namePet[idPet])
  }, [])
  return (
    <div className='bg-green relative mx-4 h-40 w-5/6 rounded-3xl'>
      <div className='relative m-auto mt-4 h-auto w-4/5 text-center text-2xl font-semibold text-white'>
        {namePet[idPet].name}
      </div>
    </div>
  )
}

export const SquarePetsDate = (props) => {
  const [namePet, state, branch, doctor, date, follow] = [
    props.namePet,
    props.state,
    props.branch,
    props.doctor,
    props.date,
    props.follow
  ]

  return (
    <>
      <div className='bg-green relative mx-auto mt-8 flex h-40 w-5/6 rounded-3xl text-white'>
        <div className='relative w-1/4'>
          <MdPets className='mx-auto mt-3 h-5/6 w-5/6'></MdPets>
        </div>
        <div className='relative my-auto grid h-1/2 w-3/4 grid-cols-2 gap-2'>
          <div className='relative my-auto h-2/5 font-semibold'>
            Paciente: {namePet}
          </div>
          <div className='relative my-auto h-2/5 font-semibold'>
            Estado: {state}
          </div>
          <div className='relative my-auto h-2/5 font-semibold'>
            Sucursal: {branch}
          </div>
          <div className='relative my-auto h-2/5 font-semibold'>
            Médico: {doctor}
          </div>
          <div className='relative my-auto h-2/5 font-semibold'>
            Fecha: {date}
          </div>
          <div className='relative my-auto h-2/5 font-semibold'>
            Seguimiento: {follow}
          </div>
        </div>
      </div>
    </>
  )
}
