import { ColorCService } from '@/services'
import { useState, useEffect } from 'react'

const useMascota = () => {
  const [color, setColor] = useState([])
  useEffect(() => {
    ColorCService.list().then(({ color }) => {
      setColor(color)
    })
  }, [])
  return { color }
}

export default useMascota
