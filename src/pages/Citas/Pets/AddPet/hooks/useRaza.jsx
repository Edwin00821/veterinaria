import { RazaCService } from '@/services'
import { useState, useEffect } from 'react'

const useRaza = () => {
  const [raza, setRaza] = useState([])
  useEffect(() => {
    RazaCService.list().then(({ raza }) => {
      setRaza(raza)
    })
  }, [])
  return { raza }
}

export default useRaza
