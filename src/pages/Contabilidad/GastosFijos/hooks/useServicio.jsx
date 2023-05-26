import { useState, useEffect } from 'react'
import { ServicioCService } from '@/services'

const useServicio = () => {
  const [Servicios, setServicios] = useState([])
  const [Descripcion, setDescripcion] = useState('')
  const [ServiceChoice, setServiceChoise] = useState()

  useEffect(() => {
    ServicioCService.list().then((servicio) => {
      console.log(servicio)
      setServicios(servicio)
      setDescripcion(servicio[0].descripcion_ser)
    })
    console.log(new Date().toISOString())
  }, [])

  const refreshDescripcion = (value) => {
    setDescripcion(
      Servicios.find((item) => item.id_ser === value).descripcion_ser
    )
  }
  const refreshServiceChoise = (value) => {
    setServiceChoise(Servicios.find((item) => item.id_ser === value).id_ser)
  }

  return {
    Servicios,
    Descripcion,
    ServiceChoice,
    setServicios,
    refreshDescripcion,
    refreshServiceChoise
  }
}

export default useServicio
