import { useState, useEffect } from 'react'
const PETS = [
  {
    id_cli: 1,
    nombre_mas: 'Henry',
    fechaNac_mas: new Date(),
    urlFoto_mas: '',
    raza: {
      id_raz: 1,
      nombre_raz: 'Pitbull',
      descripcion_raz: '',
      especie: {
        id_esp: 1,
        nombre_esp: 'Perro',
        descripcion_esp: ''
      }
    },
    sexo: {
      id_sex: 1,
      nombre_sex: 'Macho',
      descripcion_sex: ''
    },
    color: {
      id_col: 1,
      nombre_col: 'Blanco',
      descripcion_col: ''
    },
    fisiologias: [
      {
        id_fis: 1,
        pulso_fis: 0,
        dieta_fis: '',
        tipoAlimentacion_fis: '',
        cantidadAlimentacion_fis: 0,
        temperatura_fis: 0,
        frecuenciaCardiaca_fis: 0,
        frecuenciaRespiratoria_fis: 0
      }
    ]
  }
]
const useDates = () => {
  const [pets, setPets] = useState(null)
  useEffect(() => {
    setPets(PETS)
  }, [])
  return { pets, setPets }
}

export default useDates
