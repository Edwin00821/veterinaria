import { useState, useEffect } from 'react'
import { DuenoVetDService } from '@/services'

const useDuenoVet = () => {
  const [duenos, setDuenos] = useState([])

  useEffect(() => {
    DuenoVetDService.list().then(({ duenoVeterinaria }) => {
      setDuenos(duenoVeterinaria)
    })
  }, [])

  return { duenos }
}

export default useDuenoVet
