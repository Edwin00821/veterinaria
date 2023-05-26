export const getSession = (name = 'client') => {
  const session = localStorage.getItem(name)
  if (!session) {
    return null
  }
  return JSON.parse(session)
}
