import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import { RxTriangleDown } from 'react-icons/rx'
import { HiOutlineFilter } from 'react-icons/hi'
import {
  Graph,
  ListThings,
  DataEstadistic,
  TotalDatesGraph,
  GraphDays,
  GraphEspecies,
  GraphUsuDate,
  GraphEdad,
  GraphMarcasPop,
  GraphVacunacion,
  GraphEnfermedades
} from './components'

const MODES = {
  Citas: 'Citas',
  Animales: 'Animales',
  Productos: 'Productos',
  Salud: 'Salud'
}

const DatesDash = () => {
  // Gráfica de citas por día en el mes
  const [Mode, setMode] = useState(true)

  // Grafica de citas totales y especie

  // Gráfica Cantidad de citas po usuario
  const [selectedMode, setSelectedMode] = useState()

  // const setTypeFactory = useCallback((type) => {}, []);
  useEffect(() => {
    switch (selectedMode) {
      case MODES.Citas:
        setRows({
          row1: [true, true],
          row2: [false, false],
          row3: [false, false],
          row4: [false, false]
        })
        break
      case MODES.Animales:
        setRows({
          row1: [false, false],
          row2: [false, true],
          row3: [true, false],
          row4: [false, false]
        })
        break
      case MODES.Productos:
        setRows({
          row1: [false, false],
          row2: [true, false],
          row3: [false, false],
          row4: [false, true]
        })
        break
      case MODES.Salud:
        setRows({
          row1: [false, false],
          row2: [false, false],
          row3: [false, true],
          row4: [true, false]
        })
        break
      case undefined:
        setRows({
          row1: [true, true],
          row2: [true, true],
          row3: [true, true],
          row4: [true, true]
        })
        break
    }
  }, [selectedMode])

  const [rows, setRows] = useState({
    row1: [true, true],
    row2: [true, true],
    row3: [true, true],
    row4: [true, true]
  })

  const [Graph1, setGraph1] = useState(false)
  const [Graph3, setGraph3] = useState(false)
  const [Graph4, setGraph4] = useState(false)
  const [Graph5, setGraph5] = useState(false)
  const [Graph6, setGraph6] = useState(false)
  const [Graph7, setGraph7] = useState(false)
  const [Graph8, setGraph8] = useState(false)
  const [VetSelect, setVetSelect] = useState(false)
  const [FilSelect, setFilSelect] = useState(false)
  return (
    <>
      {Mode ? (
        <div className='flex h-full w-full'>
          <div className='flex h-full w-full items-center'>
            <div className='h-6/7 w-full'>
              <h3 className='text-center text-3xl font-semibold text-primary'>
                DashBoard
              </h3>
              <div className='h-1/14 my-[1vh] flex items-center justify-center text-3xl font-semibold text-primary'>
                <div className='relative flex h-full w-[50%] items-center'>
                  <button
                    className='mx-[12vw] flex h-[7vh] w-[20vh] items-center justify-center rounded-[1vw] border-[.5vh] border-primary text-[3vh] outline-none '
                    onClick={() => {
                      VetSelect ? setVetSelect(false) : setVetSelect(true)
                    }}
                  >
                    <p className='mx-3 text-[2vh] text-[#757474]'>
                      Veterinaria 1
                    </p>
                    <RxTriangleDown />
                  </button>
                  <div
                    className={
                      VetSelect
                        ? 'absolute top-[11vh] mx-[12vw] flex h-auto w-[20vh] flex-col items-center justify-center'
                        : 'absolute h-0 w-0 opacity-0'
                    }
                  >
                    <button
                      className='z-50 float-left my-[.5vh] flex h-[6vh] w-full items-center justify-center rounded-[1vw] border-[.5vh] border-primary bg-white text-[2vh] text-[#757474]'
                      onClick={() => {
                        setVetSelect(false)
                      }}
                    >
                      Veterninaria 1
                    </button>
                    <button
                      className='z-50 float-left my-[.5vh] flex h-[6vh] w-full items-center justify-center rounded-[1vw] border-[.5vh] border-primary bg-white text-[2vh] text-[#757474]'
                      onClick={() => {
                        setVetSelect(false)
                      }}
                    >
                      Veterninaria 2
                    </button>
                  </div>
                </div>
                <div className='relative flex h-full w-[50%] items-center justify-end'>
                  <button
                    className='mx-[12vw] flex h-[7vh] w-[18vh] items-center justify-center rounded-[2vw] border-[.5vh] border-primary text-[3vh] text-[#757474] outline-none'
                    onClick={() => {
                      FilSelect ? setFilSelect(false) : setFilSelect(true)
                      setSelectedMode(undefined)
                    }}
                  >
                    <div className='flex h-[70%] w-[25%] items-center justify-center rounded-[50%] bg-primary text-[3vh]'>
                      <HiOutlineFilter />
                    </div>
                    {selectedMode ?? (
                      <p className='mx-5 text-[2vh] text-[#757474]'>Filtrar</p>
                    )}
                  </button>
                  <div
                    className={
                      FilSelect
                        ? 'absolute top-[12vh] z-50 mx-[12vw] flex h-auto w-[18vh] flex-col items-center justify-center rounded-[2vw] border-[.5vh] border-primary bg-white p-[1vh]'
                        : ' absolute bottom-0 left-0 right-0 top-0 h-0 w-0 opacity-0'
                    }
                  >
                    <button
                      className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-primary p-[.5vh] text-[1.5vh] text-[#757474]'
                      onClick={() => {
                        setFilSelect(false)
                        setSelectedMode(MODES.Citas)
                      }}
                    >
                      Citas
                    </button>
                    <button
                      className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-primary p-[.5vh] text-[1.5vh] text-[#757474]'
                      onClick={() => {
                        setFilSelect(false)
                        setSelectedMode(MODES.Animales)
                      }}
                    >
                      Animales
                    </button>
                    <button
                      className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-primary p-[.5vh] text-[1.5vh] text-[#757474]'
                      onClick={() => {
                        setFilSelect(false)
                        setSelectedMode(MODES.Productos)
                      }}
                    >
                      Productos
                    </button>
                    <button
                      className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-primary p-[.5vh] text-[1.5vh] text-[#757474]'
                      onClick={() => {
                        setFilSelect(false)
                        setSelectedMode(MODES.Salud)
                      }}
                    >
                      Salud
                    </button>
                  </div>
                </div>
              </div>
              <div className='grid h-[85%] w-full grid-cols-2 overflow-y-scroll bg-[#fff] '>
                {Graph1 ? (
                  <DataEstadistic
                    Type={'Citas'}
                    SubX={'Media de citas por dia'}
                    Media={129}
                    SubMd={'Mediana de citas por dia'}
                    Mediana={1234}
                    SubMo={'Moda de citas por dia'}
                    Moda={2344}
                    click={() => {
                      setGraph1(false)
                    }}
                  />
                ) : (
                  <Graph
                    Name={'Cantidad de citas por dia del mes'}
                    Graph={<GraphDays />}
                    click={() => {
                      setGraph1(true)
                    }}
                    data={true}
                  />
                )}

                <Graph
                  Name={'Citas totales'}
                  Graph={<TotalDatesGraph />}
                  click={() => {
                    setGraph2(true)
                  }}
                  data={false}
                />
                {Graph3 ? (
                  <DataEstadistic
                    Type={'Citas'}
                    SubX={'Media de citas por usuario'}
                    Media={129}
                    SubMd={'Mediana de citas por usuario'}
                    Mediana={1234}
                    SubMo={'Moda de citas por usuario'}
                    Moda={2344}
                    children={<ListThings />}
                    click={() => {
                      setGraph3(false)
                    }}
                  />
                ) : (
                  <Graph
                    Name={'Productos mas usados en citas'}
                    Graph={<GraphUsuDate />}
                    click={() => {
                      setGraph3(true)
                    }}
                    data={false}
                  />
                )}
                {Graph4 ? (
                  <DataEstadistic
                    Type={''}
                    SubX={'Media de animales registrados'}
                    Media={129}
                    SubMd={'Mediana de animales registrados'}
                    Mediana={1234}
                    SubMo={'Moda de animales registrados'}
                    Moda={2344}
                    click={() => {
                      setGraph4(false)
                    }}
                  />
                ) : (
                  <Graph
                    Name={'Cantidad de animales'}
                    Graph={<GraphEspecies />}
                    click={() => {
                      setGraph4(true)
                    }}
                    data={false}
                  />
                )}
                {Graph5 ? (
                  <DataEstadistic
                    Type={'Años'}
                    SubX={'Media de años'}
                    Media={129}
                    SubMd={'Mediana de años'}
                    Mediana={1234}
                    SubMo={'Moda de años'}
                    Moda={2344}
                    children={<ListThings />}
                    click={() => {
                      setGraph5(false)
                    }}
                  />
                ) : (
                  <Graph
                    Name={'Edad de las mascotas por especie'}
                    Graph={<GraphEdad />}
                    click={() => {
                      setGraph5(true)
                    }}
                    data={true}
                  />
                )}
                {Graph6 ? (
                  <DataEstadistic
                    Type={'Vacunas'}
                    SubX={'Media de vacunas'}
                    Media={129}
                    SubMd={'Mediana de vacunas'}
                    Mediana={1234}
                    SubMo={'Moda de vacunas'}
                    Moda={2344}
                    children={
                      <ListThings title={'Vacunas aplicadas por especie'} />
                    }
                    click={() => {
                      setGraph6(false)
                    }}
                  />
                ) : (
                  <Graph
                    Name={'Vacunas aplicadas por especie'}
                    Graph={<GraphVacunacion />}
                    click={() => {
                      setGraph6(true)
                    }}
                    data={true}
                  />
                )}
                {Graph7 ? (
                  <DataEstadistic
                    Type={'Enfermedades'}
                    SubX={'Media de enfermedades'}
                    Media={129}
                    SubMd={'Mediana de enfermedades'}
                    Mediana={1234}
                    SubMo={'Moda de enfermedades'}
                    Moda={2344}
                    children={<ListThings />}
                    click={() => {
                      setGraph7(false)
                    }}
                  />
                ) : (
                  <Graph
                    Name={'Enfermades mas comuenes por especie'}
                    Graph={<GraphEnfermedades />}
                    click={() => {
                      setGraph7(true)
                    }}
                    data={true}
                  />
                )}
                {Graph8 ? (
                  <DataEstadistic
                    Type={'Mascotas'}
                    SubX={'Media de mascotas'}
                    Media={129}
                    SubMd={'Mediana de mascotas'}
                    Mediana={1234}
                    SubMo={'Moda de mascotas'}
                    Moda={2344}
                    children={<ListThings />}
                    click={() => {
                      setGraph8(false)
                    }}
                  />
                ) : (
                  <Graph
                    Name={'Marcas mas consumidas por especies'}
                    Graph={<GraphMarcasPop />}
                    click={() => {
                      setGraph8(true)
                    }}
                    data={true}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex h-full w-full'>
          <Navbar />
          puto
        </div>
      )}
    </>
  )
}

export default DatesDash
