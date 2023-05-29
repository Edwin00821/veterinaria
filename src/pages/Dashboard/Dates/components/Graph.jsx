import React from 'react'

const Graph = ({ Name, Graph, click, data }) => {
  return (
    <div className='relative col-span-1 mx-[5%] my-[2vh] flex h-[45vh] w-[90%] flex-col items-center justify-center rounded-1/7 bg-[#d9d9d9]'>
      <div className='relative flex w-full items-center justify-center'>
        <p className='my-[1vh] text-[2.5vh] font-bold text-[#757474] '>
          {Name}
        </p>
        {data ? (
          <button
            className='y-[100%] absolute top-[1vh] w-[10vh] rounded-[1vw] bg-primary text-white outline-none'
            onClick={click}
          >
            Datos
          </button>
        ) : (
          ''
        )}
      </div>
      <div className='z-0 flex h-[40vh] justify-center'>{Graph}</div>
    </div>
  )
}

export default Graph
