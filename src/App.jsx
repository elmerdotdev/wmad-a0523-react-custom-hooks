import { useEffect, useState } from "react"
import useDocumentTitle from "./hooks/useDocumentTitle"
import useFetch from "./hooks/useFetch"
import useMousePosition from "./hooks/useMousePosition"

const App = () => {
  const [products, setProducts] = useState([])
  const productData = useFetch('//dummyjson.com/products')
  const mousePosition = useMousePosition()

  useDocumentTitle('My Cool Website')

  useEffect(() => {
    setProducts(productData.products)
  }, [productData])

  useEffect(() => {
    console.log(mousePosition.x, mousePosition.y)
  }, [mousePosition])

  return (
    <div>
      {products.map(product => {
        return <div key={product.id}>{product.title}</div>
      })}
    </div>
  )
}

export default App