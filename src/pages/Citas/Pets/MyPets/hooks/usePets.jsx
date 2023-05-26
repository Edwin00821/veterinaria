import { MascotaMService } from '@/services'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const usePets = () => {
  const [pets, setPets] = useState(null)
  const cliente = useSelector((state) => state.client)

  useEffect(() => {
    MascotaMService.list().then(({ mascota }) => {
      setPets(mascota?.filter(({ id_cli }) => id_cli === cliente.id_cli) || [])
    })
  }, [])
  return { pets, setPets }
}

export default usePets
