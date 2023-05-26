import {
  MascotaMService,
  EspecieCService,
  RazaCService,
  SexoCService,
  ColorCService
} from '@/services'
import { useState, useEffect } from 'react'

const usePets = ({ id_mas }) => {
  const [pets, setPets] = useState()

  useEffect(() => {
    MascotaMService.searchById(id_mas)
      .then(async ({ mascota }) => {
        const { raza } = await RazaCService.searchById(mascota.id_raz)

        const { sexo } = await SexoCService.searchById(mascota.id_sex)

        const { color } = await ColorCService.searchById(mascota.id_col)

        const { especie } = await EspecieCService.searchById(raza.id_esp)

        setPets({
          id_cli: mascota.id_cli,
          nombre_mas: mascota.nombre_mas,
          fechaNac_mas: mascota.fechaNac_mas,
          urlFoto_mas: mascota.urlFoto_mas,
          raza: {
            id_raz: raza.id_raz,
            nombre_raz: raza.nombre_raz,
            descripcion_raz: raza.descripcion_raz,
            especie: {
              id_esp: especie.id_esp,
              nombre_esp: especie.nombre_esp,
              descripcion_esp: especie.descripcion_esp
            }
          },
          sexo: {
            id_sex: sexo.id_sex,
            nombre_sex: sexo.nombre_sex,
            descripcion_sex: sexo.descripcion_sex
          },
          color: {
            id_col: color.id_col,
            nombre_col: color.nombre_col,
            descripcion_col: color.descripcion_col
          }
        })
      })
      .catch((err) => {
        setPets(null)
        console.log(err)
      })
  }, [id_mas])

  return { pets }
}

export default usePets
