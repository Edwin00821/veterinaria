import { ColorCService } from '@/services'
import { useState, useEffect } from 'react'

const useColor = () => {
  const [color, setColor] = useState([])
  useEffect(() => {
    ColorCService.list().then(({ color }) => {
      setColor(color)
    })
  }, [])
  return { color }
}

export default useColor
