import { useState, useEffect } from 'react'
import { ClienteDService } from '@/services'

const useClientes = () => {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    ClienteDService.list().then(({ cliente }) => {
      setClientes(cliente)
    })
  }, [])

  return { clientes }
}

export default useClientes
