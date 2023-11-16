import { useEffect, useState } from "react"

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

  const updatePosition = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
    }
  }, [])

  return mousePosition
}

export default useMousePosition