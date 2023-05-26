const Dates = ({ title, date, description }) => {
  date = '2023-02-08'
  title = 'Le dio chorrito 😥'
  description = 'Por tomar leche hechada a perder'
  return (
    <li
      role='article'
      className='relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]'
    >
      <h4 className='hidden text-lg font-medium leading-7 text-slate-500 lg:block lg:w-28 lg:text-right'>
        {date}
      </h4>
      <div className='flex flex-1 flex-col gap-4'>
        <h3 className='text-lg font-medium leading-7 text-emerald-500'>
          {title}
          <span className='font-normal text-slate-500 lg:hidden'>- {date}</span>
        </h3>
        <p className=' text-slate-500'>{description}</p>
      </div>
    </li>
  )
}

export default Dates
