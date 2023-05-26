import { useState, useEffect } from 'react'

import { useColor, useEspecie, useRaza, useSexo } from './'

const useSelect = ({ especieSelected }) => {
  const [selectColor, setSelectColor] = useState([])
  const [selectSexo, setSelectSexo] = useState([])
  const [selectEspecie, setSelectEspecie] = useState([])
  const [selectRaza, setSelectRaza] = useState([])

  const { color } = useColor()
  const { sexo } = useSexo()
  const { especie } = useEspecie()
  const { raza } = useRaza()

  useEffect(() => {
    setSelectColor(
      color?.map(({ id_col, nombre_col }) => ({
        value: id_col,
        label: nombre_col
      }))
    )

    setSelectSexo(
      sexo?.map(({ id_sex, nombre_sex }) => ({
        value: id_sex,
        label: nombre_sex
      }))
    )

    setSelectEspecie(
      especie?.map(({ id_esp, nombre_esp }) => ({
        value: id_esp,
        label: nombre_esp
      }))
    )
    setSelectRaza([
      {
        value: null,
        label: 'Seleccione una raza'
      }
    ])
  }, [color, sexo, especie, raza])

  useEffect(() => {
    if (especieSelected) {
      setSelectRaza(
        raza
          ?.filter(({ id_esp }) => id_esp === especieSelected?.id)
          .map(({ id_raz, nombre_raz }) => ({
            value: id_raz,
            label: nombre_raz
          }))
      )
    }
  }, [especieSelected])

  return {
    color: selectColor,
    sexo: selectSexo,
    especie: selectEspecie,
    raza: selectRaza
  }
}

export default useSelect
