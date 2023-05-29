const EXAMPLE = [
  {
    sectionTitle: 'Alimento',
    sectionElements: [
      'Orijen Original-Croquetas para perro',
      'Trick & Treats YUMPERS'
    ]
  },
  {
    sectionTitle: 'Alimento',
    sectionElements: [
      'Orijen Original-Croquetas para perro',
      'Whiskas Comida para Gatos Croquetas'
    ]
  },
  {
    sectionTitle: 'Alimento',
    sectionElements: ['Trick & Treats YUMPERS', 'Trick & Treats YUMPERS']
  },
  {
    sectionTitle: 'Alimento',
    sectionElements: [
      'Orijen Original-Croquetas para perro',
      'Orijen Original-Croquetas para perro'
    ]
  },
  {
    sectionTitle: 'Alimento',
    sectionElements: [
      'Orijen Original-Croquetas para perro',
      'Orijen Original-Croquetas para perro'
    ]
  }
]

const ListThings = ({ title, data = EXAMPLE }) => {
  return (
    <div className='h-full w-full p-1'>
      <div className='flex h-[10%] w-full items-center justify-center text-[2.5vh] text-[#555555]'>
        {title}
      </div>
      <div className='grid-flow-row-3 grid grid-cols-2 gap-2 text-center text-[2vh] '>
        {data.map((el) => (
          <div key={el.sectionTitle} className='mx-[5%] w-[90%]'>
            <h2 className='flex items-center justify-center text-[2vh] font-black text-black'>
              {el.sectionTitle}
            </h2>
            <ul className='text-[#434343]'>
              {el.sectionElements.map((sec) => (
                <li key={sec} className='my-[.5vh] text-left text-[.8rem] '>
                  - {sec}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListThings
