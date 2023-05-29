import { useState, useEffect } from 'react'

import { usePets } from '@/hooks'

const useSelect = () => {
  const [selectPet, setSelectPet] = useState([])

  const { pets } = usePets()

  useEffect(() => {
    setSelectPet(
      pets?.map(({ id_mas, nombre_mas }) => ({
        value: id_mas,
        label: nombre_mas
      }))
    )
  }, [pets])

  return {
    pet: selectPet
  }
}

export default useSelect
