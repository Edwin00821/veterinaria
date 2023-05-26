export const signIn = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}
