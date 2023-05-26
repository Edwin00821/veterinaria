import { useState, useEffect } from 'react'
import { UsuarioMService } from '@/services'

const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    UsuarioMService.list().then(({ usuario }) => {
      setUsuarios(usuario)
    })
  }, [])

  return { usuarios }
}

export default useUsuarios
