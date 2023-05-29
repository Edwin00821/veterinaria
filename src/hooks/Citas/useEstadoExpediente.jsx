import { EstadoExpedienteCService } from '@/services'
import { useState, useEffect } from 'react'

const useEstadoExpediente = (id_estexp) => {
  const [estadoExpediente, setEstadoExpediente] = useState(null)

  useEffect(() => {
    if (id_estexp) {
      EstadoExpedienteCService.searchById(id_estexp).then(
        ({ estadoExpediente }) => {
          console.log(estadoExpediente)
          setEstadoExpediente(estadoExpediente || [])
        }
      )
    }
  }, [])
  return { estadoExpediente, setEstadoExpediente }
}

export default useEstadoExpediente
