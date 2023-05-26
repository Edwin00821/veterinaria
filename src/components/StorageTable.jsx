import { DataGrid } from '@mui/x-data-grid'

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 20,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'nomProduct',
    headerName: 'Nombre del Producto',
    minWidth: 200,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'marc',
    headerName: 'Marca',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'prec',
    headerName: 'Precio',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'stk',
    headerName: 'Stock',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'edo',
    headerName: 'Estado',
    minWidth: 150,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'cat',
    headerName: 'Categoria',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  }
  // {
  //   id: 'nomProduct',
  //   label: 'Nombre del Producto',
  //   minWidth: 200,
  //   align: 'Center',
  //   format: (value) => value.toLocaleString('en-US'),
  // }
]

const rows = [
  {
    id: 1,
    nomProduct: 'Purina',
    marc: 'Purina',
    prec: '$200',
    stk: 4,
    edo: 'Activo',
    cat: 'Alimento'
  },
  {
    id: 2,
    nomProduct: 'Purina',
    marc: 'Purina',
    prec: '$200',
    stk: 4,
    edo: 'Activo',
    cat: 'Alimento'
  },
  {
    id: 3,
    nomProduct: 'Purina',
    marc: 'Purina',
    prec: '$200',
    stk: 4,
    edo: 'Activo',
    cat: 'Alimento'
  },
  {
    id: 4,
    nomProduct: 'Purina',
    marc: 'Purina',
    prec: '$200',
    stk: 4,
    edo: 'Activo',
    cat: 'Alimento'
  },
  {
    id: 5,
    nomProduct: 'Purina',
    marc: 'Purina',
    prec: '$200',
    stk: 4,
    edo: 'Activo',
    cat: 'Alimento'
  },
  {
    id: 6,
    nomProduct: 'Purina',
    marc: 'Purina',
    prec: '$200',
    stk: 4,
    edo: 'Activo',
    cat: 'Alimento'
  }
]

const StorageTable = () => {
  return (
    <div className='MuiBox-root css-0 z-0 flex h-full w-full flex-col items-center justify-center gap-5'>
      <div className='p-2'>
        <h1 className='font-Inter p-8 text-center text-4xl text-[#6ED4A5]'>
          Inventario
        </h1>
      </div>

      <div className='rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
        <a href='./AddProduct'>
          <button className='p-2'>+ Agregar Producto</button>
        </a>
      </div>

      <div className='MuiBox-root h-[26rem] w-[1000px]'>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default StorageTable
