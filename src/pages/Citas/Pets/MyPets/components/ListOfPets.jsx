import { Pet } from './'

const ListOfPets = ({ pets }) => {
  return pets?.map(({ id_mas, nombre_mas }) => (
    <Pet key={id_mas} id={id_mas} name={nombre_mas} />
  ))
}

export default ListOfPets
