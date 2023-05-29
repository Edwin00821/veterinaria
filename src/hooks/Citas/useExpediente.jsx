import { ExpedienteMService } from '@/services'
import { useState, useEffect } from 'react'
import usePets from './usePets'

const useExpediente = () => {
  const [expediente, setExpediente] = useState(null)
  const { pets } = usePets()

  useEffect(() => {
    if (pets) {
      ExpedienteMService.list().then(({ expediente }) => {
        setExpediente(
          expediente?.filter(({ id_mas }) => {
            return pets.map((mascota) => mascota.id_mas === id_mas)
          }) || []
        )
      })
    }
  }, [pets])
  return { expediente, setExpediente }
}

export default useExpediente
