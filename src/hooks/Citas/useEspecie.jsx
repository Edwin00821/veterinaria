import { EspecieCService } from '@/services'
import { useState, useEffect } from 'react'

const useEspecie = () => {
  const [especie, setEspecie] = useState([])
  useEffect(() => {
    EspecieCService.list().then(({ especie }) => {
      setEspecie(especie)
    })
  }, [])
  return { especie }
}

export default useEspecie
