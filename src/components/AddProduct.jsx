import React from 'react'

const AddProduct = () => {
  return (
    <div className='MuiBox-root css-0 z-0 flex h-screen w-full flex-col items-center justify-center gap-5'>
      <form method='GET' action='si'>
        <table className='table-auto border-separate border border-[#6ED4A5] '>
          <tr>
            <th>
              <h1 className='font-Inter p-8 text-2xl font-bold '>
                Agregar Productos:
              </h1>
            </th>
          </tr>
          <tr>
            <th>
              <p className='font-Inter p-8 text-left text-xl'>
                {' '}
                Nombre del Producto:{' '}
              </p>
            </th>
            <th>
              <input
                className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                placeholder='Nombre del Producto'
                type='text'
              />
            </th>
          </tr>
          <tr>
            <th>
              <p className='font-Inter p-8 text-left text-xl'>
                {' '}
                Marca del Producto:{' '}
              </p>
            </th>
            <th>
              <input
                className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                placeholder='Marca del Producto'
                type='text'
              />
            </th>
          </tr>
          <tr>
            <th>
              <p className='font-Inter p-8 text-left text-xl'>
                {' '}
                Precio del Producto:{' '}
              </p>
            </th>
            <th>
              <input
                className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                type='text'
              />
            </th>
          </tr>
          <tr>
            <th>
              <p className='font-Inter p-8 text-left text-xl'>
                {' '}
                Descripción del Producto:{' '}
              </p>
            </th>
            <th>
              <input
                className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                placeholder='Descripción del Producto'
                type='text'
              />
            </th>
          </tr>
          <tr>
            <th>
              <p className='font-Inter p-8 text-left text-xl'>
                {' '}
                Fecha de Compra:{' '}
              </p>
            </th>
            <th>
              <input
                className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                placeholder='Fecha de Compra'
                type='text'
              />
            </th>
          </tr>
          <tr>
            <th>
              <p className='font-Inter p-8 text-left text-xl'>
                {' '}
                Fecha de Ingreso:{' '}
              </p>
            </th>
            <th>
              <input
                className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                placeholder='Fecha de Ingreso'
                type='text'
              />
            </th>
          </tr>
          <tr>
            <th>
              <p className='font-Inter p-8 text-left text-xl'> Cantidad: </p>
            </th>
            <th>
              <input
                className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                placeholder='Cantidad'
                type='text'
              />
            </th>
          </tr>
          <tr>
            <th>
              <p className='font-Inter p-8 text-left text-xl'>
                {' '}
                Importe total de la Compra:{' '}
              </p>
            </th>
            <th>
              <div className=''>
                <input
                  className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='Importe total de la compra'
                  type='text'
                />
              </div>
            </th>
          </tr>
          <tr>
            <th className='p-2'>
              <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
                <button className='p-2'>
                  <p className='p-1 text-center'> + Agregar Producto </p>
                </button>
              </div>
            </th>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default AddProduct
