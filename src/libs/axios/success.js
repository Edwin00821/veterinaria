export const axiosSuccess = (axiosResponse, endpoint) => {
  const { data } = axiosResponse
  // console.log({ data })
  return { ...data }
}
