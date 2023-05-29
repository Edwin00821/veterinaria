import { useState } from 'react'

const SwitchButton = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const options = ['Perros', 'Gatos', 'Hurones', 'Conejos', 'Mini Pigs']

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsExpanded(false)
  }

  const handleMouseEnter = () => {
    setIsExpanded(true)
  }

  const handleMouseLeave = () => {
    setIsExpanded(false)
  }

  return (
    <div className='relative inline-block w-64 text-left'>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            type='button'
            className=' inline-flex h-[4vh]  w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-haspopup='true'
            aria-expanded={isExpanded}
          >
            {selectedOption ?? 'Especie'}
            <svg
              className='-mr-1 ml-2 h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M10.2929 13.2929C10.6834 12.9024 11.3166 12.9024 11.7071 13.2929L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L10 14.4142L5.70711 18.7071C5.31658 19.0976 4.68342 19.0976 4.29289 18.7071C3.90237 18.3166 3.90237 17.6834 4.29289 17.2929L8.29289 13.2929C8.68342 12.9024 9.31658 12.9024 9.70711 13.2929L9.70711 13.2929Z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </span>
      </div>
      {isExpanded && (
        <div className='absolute z-10 mt-2 h-[22vh] w-[10vw] rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {options.map((option) => (
              <a
                key={option}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                role='menuitem'
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SwitchButton
