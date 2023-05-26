export const getAge = (birthday) => {
  console.log({ birthday })

  const today = new Date()
  const DOB = new Date(birthday)

  let totalMonths =
    (today.getFullYear() - DOB.getFullYear()) * 12 +
    today.getMonth() -
    DOB.getMonth()
  totalMonths += today.getDay() < DOB.getDay() ? -1 : 0

  let years = today.getFullYear() - DOB.getFullYear()

  if (DOB.getMonth() > today.getMonth()) years = years - 1
  else if (DOB.getMonth() === today.getMonth())
    if (DOB.getDate() > today.getDate()) years = years - 1

  let days
  let months

  if (DOB.getDate() > today.getDate()) {
    months = totalMonths % 12
    if (months === 0) months = 11
    const x = today.getMonth()
    switch (x) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: {
        const a = DOB.getDate() - today.getDate()
        days = 31 - a
        break
      }
      default: {
        const a = DOB.getDate() - today.getDate()
        days = 30 - a
        break
      }
    }
  } else {
    days = today.getDate() - DOB.getDate()
    if (DOB.getMonth() === today.getMonth()) months = totalMonths % 12
    else months = (totalMonths % 12) + 1
  }
  const age = years + ' years ' + months + ' months ' + days + ' days'
  return age
}
