// import { useState, useEffect } from 'react'
// import useSWR from 'swr'

export function useProduct(swrConfig = {}) {
  const [categorias, setCategorias] = useState()
  const [errorCategorias, setErrorCategorias] = useState()
  const [isLoadingCategorias, setIsLoadingCategorias] = useState()

  const [marcas, setMarcas] = useState()
  const [errorMarcas, setErrorMarcas] = useState()
  const [isLoadingMarcas, setIsLoadingMarcas] = useState()

  const [animales, setAnimales] = useState()
  const [errorAnimales, setErrorAnimales] = useState()
  const [isLoadingAnimales, setIsLoadingAnimales] = useState()

  const [productos, setProductos] = useState()
  const [errorProductos, setErrorProductos] = useState()
  const [isLoadingProductos, setIsLoadingProductos] = useState()

  // const {
  //   data: categorias,
  //   error: errorCategorias,
  //   isLoading: isLoadingCategorias
  // } = useSWR('/catalogo/categoriaC', swrConfig)
  // const {
  //   data: marcas,
  //   error: errorMarcas,
  //   isLoading: isLoadingMarcas
  // } = useSWR('/catalogo/marcaC', swrConfig)
  // const {
  //   data: animales,
  //   error: errorAnimales,
  //   isLoading: isLoadingAnimales
  // } = useSWR('/catalogo/animalproductoC', swrConfig)
  // const {
  //   data: productos,
  //   error: errorProductos,
  //   isLoading: isLoadingProductos
  // } = useSWR('/maestra/productoM', swrConfig)

  return {
    isLoading:
      isLoadingCategorias ||
      isLoadingMarcas ||
      isLoadingAnimales ||
      isLoadingProductos,
    error: errorCategorias || errorMarcas || errorAnimales || errorProductos,
    data: {
      categorias,
      marcas,
      animales,
      productos
    }
  }
}
