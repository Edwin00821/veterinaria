const Dates = () => {
  return (
    <article className='flex h-full min-w-[300px] flex-col items-center justify-center gap-5 rounded-3xl bg-primary px-10 py-5 text-white'>
      <div className='h-1/3 w-3/4 rounded-[100%] bg-gray-500'>
        <img
          className='h-full w-full rounded-[100%]'
          src=''
          alt='imagen de la mascota'
        />
      </div>
      <div className='flex h-1/2 w-full flex-col justify-center gap-3 text-xl font-bold '>
        <h4>Seguimiento: Activo</h4>
        <h4>Médico: Luis Telles</h4>
        <h4>Sucursal: Popotla</h4>
        <h4>Fecha: 20/04/2023</h4>
      </div>
      <div className='h-14 w-2/3 rounded-xl bg-gray-300'></div>
    </article>
  )
}

export default Dates
