import React from 'react'

const ListOfOptions = ({
  options,
  name,
  setValue,
  currentItem,
  isOpen,
  setIsOpen,
  typeOfOpen
}) => {
  return (
    <ul
      className={`${isOpen ? 'flex' : 'hidden'} absolute ${
        typeOfOpen === 'up' ? 'bottom-full mb-2' : 'top-full mt-1'
      }  z-[10] max-h-[220%] w-full flex-col overflow-y-scroll rounded bg-white py-2 text-slate-500 shadow-md shadow-slate-500/10 scrollbar-none`}
    >
      {options?.map(({ label, value }, index) => (
        <li
          key={label}
          onClick={() => {
            if (value) {
              setValue(name, { id: value, name: label })
              setIsOpen(false)
            }
          }}
        >
          <p
            className={` ${
              index === currentItem
                ? 'bg-emerald-50 text-emerald-500'
                : 'bg-none text-slate-500'
            } flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none`}
            aria-current={index + 1 === currentItem ? 'true' : 'false'}
          >
            <span className='flex flex-col gap-1 overflow-hidden whitespace-nowrap'>
              <span className='truncate leading-5'>{label}</span>
            </span>
          </p>
        </li>
      ))}
    </ul>
  )
}

export default ListOfOptions
