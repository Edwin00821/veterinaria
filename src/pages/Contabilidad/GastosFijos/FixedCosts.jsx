import { useRef } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useServicio } from './hooks'

const FixedCosts = () => {
  const formRef = useRef()

  const {
    Descripcion,
    Servicios,
    ServiceChoice,
    refreshDescripcion,
    refreshServiceChoise
  } = useServicio()

  const handleChange = (event) => {
    refreshDescripcion(event.target.value)
    refreshServiceChoise(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.get(`${URL}/detalle/periodoD`, {
      headers: {
        'x-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc'
      }
    })
    const periodoPerteneciente = data.periodo.find(
      (item) =>
        new Date(item.fechaInicio_per) <
          new Date(`${e.target.date.value}T00:00:00`) &&
        new Date(item.fechaTermino_per) >
          new Date(`${e.target.date.value}T00:00:00`)
    )
    if (!periodoPerteneciente) {
      toast.error(
        'Ups! La fecha ingresada no coincide con alguno de los periodos fiscales registrados en el sistema.',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        }
      )
    } else {
      try {
        await axios.post(
          `${URL}/maestra/gastoFijoM`,
          {
            fecha_gasfij: new Date(e.target.date.value).toISOString(),
            monto_gasfij: e.target.monto.value,
            id_ser: ServiceChoice,
            id_per: periodoPerteneciente.id_per
          },
          {
            headers: {
              'x-token':
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc'
            }
          }
        )

        try {
          toast.success(
            'Actualizando balance del periodo fiscal correspondiente...',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark'
            }
          )
          await axios.put(
            `${URL}/detalle/periodoD/${periodoPerteneciente.id_per}`,
            {
              balance_per:
                periodoPerteneciente.balance_per -
                parseInt(e.target.monto.value)
            },
            {
              headers: {
                'x-token':
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc'
              }
            }
          )
          toast.success(
            'Se registro correctamente el gasto fijo. Actualizado correctamente el balance. ',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark'
            }
          )
          formRef.current.reset()
        } catch (error) {
          toast.error(
            `Ups! Algo salio mal al actualizar el balance fiscal: ${error}`,
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark'
            }
          )
        }
      } catch (error) {
        toast.error(
          `Ups! Algo salio mal al registrar el gasto fijo: ${error}`,
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark'
          }
        )
      }
    }
  }

  return (
    <div className='MuiBox-root css-0 z-0 flex h-screen w-full flex-col items-center justify-center gap-5'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <form method='GET' onSubmit={handleSubmit} ref={formRef}>
        <div className='grid grid-cols-3 gap-7'>
          <div className='col-span-1'>¡Bienvenido!</div>
          <div className='col-span-2'>
            <h1 className='font-Inter p-8 text-2xl font-bold '>Pagos Fijos</h1>
          </div>

          <div className='col-span-1'>
            <h1 className='font-Inter p-8 text-2xl font-bold '>Gerente</h1>
          </div>
          <div className='col-span-1'>
            <p className='font-Inter p-8 text-left text-xl'>
              {' '}
              Seleccione el servicio a pagar:{' '}
            </p>
            <select
              className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
              defaultValue='1'
              onChange={handleChange}
            >
              {Servicios &&
                Servicios.map((servicio) => {
                  return (
                    <option key={servicio.id_ser} value={servicio.id_ser}>
                      {servicio.nombre_ser}
                    </option>
                  )
                })}
            </select>
          </div>
          <div className='col-span-1'>
            <p className='font-Inter p-8 text-left text-xl'> Descripcion: </p>
          </div>

          <div className='col-span-1'>
            <p className='text-center underline-offset-2'>
              {' '}
              Pago de Gastos Fijos{' '}
            </p>
          </div>
          <div className='col-span-1'>
            <select className='w-full' placeholder='Tipo de Pago' />
          </div>
          <div className='col-span-1'>
            <input
              className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
              placeholder='Descripcion'
              type='text'
              value={Descripcion}
            />
          </div>

          <div className='col-span-1'>
            <button className='p-2'>
              <p className='p-1 text-center'> Pago de Gastos Generales </p>
            </button>
          </div>
          <div className='col-span-1'>
            <p className='font-Inter p-8 text-left text-xl'> Monto: </p>
          </div>
          <div className='col-span-1'>
            <input
              className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
              placeholder='Monto'
              type='number'
              name='monto'
            />
          </div>

          <div className='col-span-1'>
            <p className='font-Inter p-8 text-left text-xl'> Fecha de pago: </p>
          </div>
          <div className='col-span-1'>
            <input
              className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
              placeholder='Fecha de pago'
              type='date'
              name='date'
            />
          </div>
          <br />
          <br />
          <div className='col-span-1'>
            <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
              <button className='p-2' type='submit'>
                <p className='p-1 text-center'> Registrar pago </p>
              </button>
            </div>
          </div>
          <div className='col-start-2 col-end-4'>
            <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
              <button
                className='p-2'
                onClick={(redireccion) => {
                  window.location.href = '/Servicios'
                }}
              >
                <p className='p-1 text-center'> Registrar Servicio </p>
              </button>
            </div>
          </div>
          <div className='col-start-2 col-end-4'>
            <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
              <button
                className='p-2'
                onClick={(redireccion) => {
                  window.location.href = '/Inventario'
                }}
              >
                <p className='p-1 text-center'> Regresar al Inventario </p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FixedCosts
