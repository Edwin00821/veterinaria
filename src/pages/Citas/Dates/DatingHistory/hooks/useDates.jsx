import { useState, useEffect } from 'react'

const useDates = () => {
  const [dates, setDates] = useState(null)

  useEffect(() => {
    setDates([])
  }, [])

  return { dates }
}

export default useDates
