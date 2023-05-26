import React, { useState, useEffect } from 'react'
import { ListOfOptions, MsgError } from '@/components'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Dropddown = ({
  label = 'Select an option',
  value,
  setValue,
  options,
  register,
  errors
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  const handleKeyDown = (e) => {
    if (isOpen) {
      e.preventDefault()
      console.log(currentItem)
      console.log(currentItem + 1)

      switch (e.keyCode) {
        // KeyDown
        case 40:
          if (currentItem === options.length - 1) {
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
          setCurrentItem(1)
          setIsOpen(false)
          break
        case 13:
          // setValue(
          //   e.target.id,
          //   options.map(({}) => {})
          // )
          setCurrentItem(1)
          setIsOpen(false)
          break
        default:
          break
      }
    }
  }

  return (
    <div className='group relative w-full' id='dropdown'>
      <input
        id={register?.name}
        className='peer relative z-[0] h-12 w-full appearance-none border-b border-slate-200 bg-white px-4 text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? ' true' : 'false'}
        type='radio'
      />
      <label
        id={value?.name}
        htmlFor={register?.name}
        className='absolute bottom-0 left-0 px-4 py-2'
      >
        {value?.name}
      </label>
      <label
        htmlFor={register?.name}
        className={`pointer-events-none absolute left-2 top-3 z-[1] px-2 text-sm ${
          value && value?.name !== '' && 'peer-valid:-top-2 peer-valid:text-xs'
        } ${
          !errors
            ? 'text-slate-400 peer-focus:text-emerald-500'
            : 'text-pink-500 peer-focus:text-pink-500'
        } transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all after:text-pink-500 after:content-['\\00a0*'] peer-focus:-top-2 peer-focus:text-xs peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent`}
      >
        {label}
      </label>

      <MdKeyboardArrowDown
        className={`pointer-events-none absolute right-2 top-2.5 h-5 w-5 fill-slate-400 transition-all ${
          !errors ? 'peer-focus:fill-emerald-500' : 'peer-focus:fill-pink-500'
        } peer-disabled:cursor-not-allowed`}
      />

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

export default Dropddown
