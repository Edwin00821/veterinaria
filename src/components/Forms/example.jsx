import React, { useState, useEffect, useRef } from 'react'

export const DropdownBasic = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)
  const wrapperRef = useRef(null)

  const navigationItems = [
    {
      linkName: 'Dashboard'
    },
    {
      linkName: 'Metrics and analytics'
    },
    {
      linkName: 'Multi-Channel Funnels overview'
    },
    {
      linkName: 'User settings'
    },
    {
      linkName: 'User Profile'
    }
  ]

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
          if (currentItem === navigationItems.length - 1) {
            setCurrentItem(0)
          } else {
            setCurrentItem(currentItem + 1)
          }
          break
        // KeyUp
        case 38:
          if (currentItem === 0) {
            setCurrentItem(navigationItems.length - 1)
          } else {
            setCurrentItem(currentItem - 1)
          }
          break
        // Escape
        case 27:
          setCurrentItem(1)
          setIsOpen(false)
          break
        default:
          break
      }
    }
  }

  return (
    <>
      {/* <!-- Component: Basic dropdown menu--> */}
      <div className='relative inline-flex ' id='dropdown'>
        {/*  <!--  Start Dropdown trigger --> */}
        <button
          className='inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none'
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? ' true' : 'false'}
          ref={wrapperRef}
        >
          <span>Choose one</span>
          <span className='relative only:-mx-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='1.5'
              aria-labelledby='t-01 d-01'
              role='graphics-symbol'
            >
              <title id='t-01'>Button icon</title>
              <desc id='d-01'>An icon describing the buttons usage</desc>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </span>
        </button>
        {/*  <!--  End Dropdown trigger --> */}
        {/*  <!-- Start Menu list --> */}
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } text-sla absolute top-full z-10 mt-1 flex w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
        >
          {navigationItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={` ${
                    index === currentItem
                      ? 'bg-emerald-50 text-emerald-500'
                      : 'bg-none text-slate-500'
                  } flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none`}
                  href='#'
                  aria-current={index + 1 === currentItem ? 'page' : 'false'}
                >
                  <span className='flex flex-col gap-1 overflow-hidden whitespace-nowrap'>
                    <span className='truncate leading-5'>{item.linkName}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
        {/*  <!-- End Menu list --> */}
      </div>
      {/* <!-- End Basic dropdown menu--> */}
    </>
  )
}

export const SelectFirst = ({
  label = 'Select an option',
  value,
  options,
  register,
  errors
}) => {
  return (
    <div className='group relative z-0 w-full'>
      <select
        id={register?.name}
        className='peer relative h-12 w-full appearance-none border-b border-slate-200 bg-white px-4 text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400'
        defaultValue=''
        {...register}
      >
        {/* <ListOptions /> */}
      </select>
      <label
        htmlFor={register?.name}
        className={`pointer-events-none absolute left-2 top-3 z-[1] px-2 text-sm ${
          value && value !== '' && 'peer-valid:-top-2 peer-valid:text-xs'
        } ${
          !errors
            ? 'text-slate-400 peer-focus:text-emerald-500'
            : 'text-pink-500 peer-focus:text-pink-500'
        } transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all after:text-pink-500 after:content-['\\00a0*'] peer-focus:-top-2 peer-focus:text-xs peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent`}
      >
        {label}
      </label>
      {/* <MdKeyboardArrowDown
        className={`pointer-events-none absolute right-2 top-2.5 h-5 w-5 fill-slate-400 transition-all ${
          !errors ? 'peer-focus:fill-emerald-500' : 'peer-focus:fill-pink-500'
        } peer-disabled:cursor-not-allowed`}
      /> */}
      <small
        className={`absolute flex w-full justify-between px-4 py-1 text-sm ${
          !errors ? 'text-slate-400' : 'text-pink-500'
        } transition`}
      >
        <span>{errors?.message}</span>
        <span className='text-slate-500'>1/10</span>
      </small>
    </div>
  )
}

const Select = ({
  label = 'Select an option',
  value,
  options,
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
        default:
          break
      }
    }
  }

  return (
    <div className='group relative z-0 inline-flex w-full' id='dropdown'>
      {/* <!-- Component: Basic dropdown menu--> */}
      <button
        id={register?.name}
        className='peer relative h-12 w-full appearance-none border-b border-slate-200 bg-white px-4 text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? ' true' : 'false'}
        ref={wrapperRef}
      >
        <label
          htmlFor={register?.name}
          className={`pointer-events-none absolute left-2 top-3 z-[1] px-2 text-sm ${
            value && value !== '' && 'peer-valid:-top-2 peer-valid:text-xs'
          } ${
            !errors
              ? 'text-slate-400 peer-focus:text-emerald-500'
              : 'text-pink-500 peer-focus:text-pink-500'
          } transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all after:text-pink-500 after:content-['\\00a0*'] peer-focus:-top-2 peer-focus:text-xs peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent`}
        >
          {label}
        </label>
        <span className='relative only:-mx-5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='1.5'
            aria-labelledby='t-01 d-01'
            role='graphics-symbol'
          >
            <title id='t-01'>Button icon</title>
            <desc id='d-01'>An icon describing the buttons usage</desc>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
          </svg>
        </span>
      </button>
      {/*  <!--  End Dropdown trigger --> */}
      {/*  <!-- Start Menu list --> */}
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } text-sla absolute top-full z-10 mt-1 flex w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
      >
        <ListOfOptions options={options} currentItem={currentItem} />
      </ul>
      {/*  <!-- End Menu list --> */}

      {/* <!-- End Basic dropdown menu--> */}
    </div>
  )
}

export default Select
