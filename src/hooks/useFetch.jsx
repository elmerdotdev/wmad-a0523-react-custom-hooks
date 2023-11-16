import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (url) {
      let ignore = false

      const fetchData = async () => {
        const response = await fetch(url)
        const responseData = await response.json()
        if (!ignore) {
          setData(responseData)
        }
      }

      fetchData()

      return () => {
        ignore = true
      }
    }
  }, [url])

  return data
}

export default useFetch