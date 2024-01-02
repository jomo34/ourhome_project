import { useRecoilValue } from 'recoil'
import { productIds } from 'states/ProductState'
import { Wrapper } from 'styles/style'
import { useEffect, useState } from 'react'
import productsList from './ProductList.json'

const ShoppingCartPage = () => {
  const products = useRecoilValue(productIds)
  const [productCartList, setProductCartList] = useState([])

  const updateCart = () => {
    const ids = [...products]
    const updatedList = []

    for (const id of ids) {
      const product = productsList.find((item) => item.id === Number(id))

      if (product) {
        const existingIndex = updatedList.findIndex(
          (item) => item.id === product.id
        )

        if (existingIndex !== -1) {
          updatedList[existingIndex].numbers += 1
        } else {
          updatedList.push({
            ...product,
            numbers: 1,
          })
        }
      }
    }
    setProductCartList(updatedList)
  }

  useEffect(() => {
    updateCart()
  }, [])

  return (
    <Wrapper>
      {productCartList.map((product) => (
        <div key={product.id}>
          <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.currentPrice}</p>
          <p>{product.originPrice}</p>
          <p>{product.numbers}</p>
        </div>
      ))}
    </Wrapper>
  )
}

export default ShoppingCartPage
