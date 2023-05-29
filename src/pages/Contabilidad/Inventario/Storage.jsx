import StorageTable from '@/components/StorageTable'
import { PrivateRoutes } from '@/libs'
import { Link } from 'react-router-dom'

const Storage = () => {
  return (
    <div>
      <div className='h-full p-2'>
        <StorageTable />
      </div>
      <div>
        <table>
          <tr>
            <th>
              <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
                <button
                  className='p-2'
                  onClick={(redireccion) => {
                    window.location.href = '/Proveedor'
                  }}
                >
                  <p className='p-1 text-center'> Agregar Proveedor </p>
                </button>
              </div>
            </th>
            <th>
              <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
                <button
                  className='p-2'
                  onClick={(redireccion) => {
                    window.location.href = '/Proveedor'
                  }}
                >
                  <p className='p-1 text-center'> Ver Proveedor </p>
                </button>
              </div>
            </th>
            <th>
              <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
                <button
                  className='p-2'
                  onClick={(redireccion) => {
                    window.location.href = '/NuevoLote'
                  }}
                >
                  <p className='p-1 text-center'> Lote </p>
                </button>
              </div>
            </th>
            <th>
              <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
                <Link className='p-2' to={PrivateRoutes.FIXED_COSTS}>
                  <p className='p-1 text-center'>
                    {' '}
                    Registrar pago de servicios
                  </p>
                </Link>
              </div>
            </th>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Storage
