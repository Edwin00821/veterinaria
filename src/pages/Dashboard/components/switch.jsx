const Switch = ({ Mode, Click }) => {
  return (
    <div className='switch_conteiner mb-[2%] h-[10%] w-full'>
      <div className='ml-[5%] h-[100%] w-[15%] content-center items-center rounded-[3vw] bg-[#6ED4A5] p-[.3%]'>
        <button
          className='bg-trasparent m-0 h-full w-full p-0 outline-none'
          onClick={Click}
        >
          <div className='flex h-full w-full rounded-[3vw] bg-white px-[.4vw] py-[1vh]'>
            <div
              className={'h-[6vh] w-[2.8vw] rounded-[50%] bg-[#6ED4A5] ' + Mode}
            ></div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Switch
