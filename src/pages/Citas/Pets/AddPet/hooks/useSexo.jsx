import { SexoCService } from '@/services'
import { useState, useEffect } from 'react'

const useSexo = () => {
  const [sexo, setSexo] = useState([])
  useEffect(() => {
    SexoCService.list().then(({ sexo }) => {
      setSexo(sexo)
    })
  }, [])
  return { sexo }
}

export default useSexo
