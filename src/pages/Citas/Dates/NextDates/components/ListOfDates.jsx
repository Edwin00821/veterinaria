import { useSelector } from 'react-redux'
import { Dates } from './'

const ListOfDates = ({ dates }) => {
  const { veterinaria } = useSelector((state) => state.client)

  return (
    <>
      {dates?.map(({ id_exp, fecha_exp, id_estexp, id_mas }) => (
        <Dates
          key={id_exp}
          img={id_mas}
          branch={veterinaria.nombre_vet}
          date={fecha_exp}
          state={id_estexp}
        />
      ))}
    </>
  )
}

export default ListOfDates
