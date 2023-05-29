import { MascotaMService } from '@/services'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const usePets = (id_mas) => {
  const [pets, setPets] = useState(null)
  const cliente = useSelector((state) => state.client)

  useEffect(() => {
    console.log({ id_mas })
    if (!id_mas) {
      MascotaMService.list().then(({ mascota }) => {
        setPets(
          mascota?.filter(({ id_cli }) => id_cli === cliente.id_cli) || []
        )
      })
    }
    if (id_mas) {
      MascotaMService.searchById(id_mas).then(({ mascota }) => {
        setPets(mascota)
      })
    }
  }, [])
  return { pets, setPets }
}

export default usePets
