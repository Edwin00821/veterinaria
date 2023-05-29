const DataEstadistic = ({
  Type,
  Media,
  Moda,
  Mediana,
  SubX,
  SubMo,
  SubMd,
  click,
  children
}) => {
  return (
    <button
      onClick={click}
      className='relative col-span-1 mx-[5%] my-[2vh] flex h-[45vh] w-[90%] cursor-pointer flex-col items-center justify-center rounded-1/7 border-none bg-[#d9d9d9] bg-[transparent] outline-none'
    >
      <div className='flex h-full w-full flex-col rounded-1/7 bg-[#d9d9d9] px-[.5vw] py-[1vh]'>
        {children ?? (
          <>
            <div className='flex h-[50%] w-[100%] '>
              <div className=' relative mx-[15%] flex flex-col  items-center rounded-1/7'>
                <p className='absolute z-0 text-[15vh] font-black text-[#6ED4A5] opacity-[.2]'>
                  X̅
                </p>
                <div>
                  <h2 className='relative z-10 text-[#6ED4A5]'>Media</h2>
                </div>
                <p className='relative z-10 my-[2vh] text-[1.5vh] text-gray-600'>
                  {SubX}
                </p>
                <h1 className='relative z-10 text-[3vh] font-black text-slate-500 '>
                  {Media + ' ' + Type}
                </h1>
              </div>
              <div className=' relative mx-[15%] flex flex-col  items-center rounded-1/7'>
                <p className='absolute z-0 text-[15vh] font-black text-[#6ED4A5] opacity-[.2]'>
                  Md
                </p>
                <div>
                  <h2 className='relative z-10 text-[#6ED4A5]'>Mediana</h2>
                </div>
                <p className='relative z-10 my-[2vh] text-[1.5vh] text-gray-600'>
                  {SubMd}
                </p>
                <h1 className='relative z-10 text-[3vh] font-black text-slate-500 '>
                  {Mediana + ' ' + Type}
                </h1>
              </div>
            </div>
            <div className={`relative flex flex-col items-center rounded-1/7`}>
              <p className='absolute z-0 text-[15vh] font-black text-[#6ED4A5] opacity-[.2]'>
                Mo
              </p>
              <div>
                <h2 className='relative z-10 text-[#6ED4A5]'>Moda</h2>
              </div>
              <p className='relative z-10 my-[2vh] text-[1.5vh] text-gray-600'>
                {SubMo}
              </p>
              <h1 className='relative z-10 text-[3vh] font-black text-slate-500 '>
                {Moda + ' ' + Type}
              </h1>
            </div>
          </>
        )}
      </div>
    </button>
  )
}

export default DataEstadistic
