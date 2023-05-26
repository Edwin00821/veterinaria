import React, { useState, useEffect, useRef } from 'react'
import { ListOfOptions, MsgError, SelectIcon, SelectLabel } from '@/components'

const Select = ({
  label = 'Select an option',
  value,
  typeOfOpen = 'down',
  setValue,
  options = [{ value: null, label: 'No hay opciones' }],
  register,
  errors
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  const handleKeyDown = (e) => {
    if (isOpen) {
      e.preventDefault()

      switch (e.keyCode) {
        // KeyDown
        case 40:
          if (currentItem === null || currentItem === options.length - 1) {
            setCurrentItem(0)
          } else {
            setCurrentItem(currentItem + 1)
          }
          break
        // KeyUp
        case 38:
          if (currentItem === 0) {
            setCurrentItem(options.length - 1)
          } else {
            setCurrentItem(currentItem - 1)
          }
          break
        // Escape
        case 27:
          setCurrentItem(0)
          setIsOpen(false)
          break

        case 13:
          if (options[currentItem]?.value) {
            setValue(e.target.id, {
              id: options[currentItem]?.value,
              name: options[currentItem]?.label
            })
          }
          setCurrentItem(0)
          setIsOpen(false)
          break
        default:
          break
      }
    }
  }

  return (
    <div className='group relative w-full' ref={wrapperRef} id='dropdown'>
      <input
        id={register?.name}
        name={register?.name}
        className={`peer relative z-[0] h-10 w-full appearance-none border-b ${
          !errors
            ? 'border-slate-200 text-slate-500'
            : 'border-pink-500 text-pink-500'
        } bg-white px-4  outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? ' true' : 'false'}
        type='radio'
      />

      <SelectLabel
        htmlFor={register?.name}
        title={label}
        value={value}
        errors={errors}
      />

      <SelectIcon typeOfOpen={typeOfOpen} errors={errors} />

      <ListOfOptions
        options={options}
        name={register?.name}
        setValue={setValue}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <MsgError errors={errors} />
    </div>
  )
}

export default Select
