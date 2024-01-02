import { useEffect, useState } from 'react'
import { Input } from 'antd'
import { NumberButton } from 'components/InputNumber/style'
import { useRecoilState } from 'recoil'
import { addedProductList } from 'states/ProductState'

const InputNumber = (product) => {
  const [counter, setCount] = useState(product.data.numbers)
  const [addedList, setAddedList] = useRecoilState(addedProductList)

  const handleChange = (event) => {
    const inputValue = event.target.value

    if (!isNaN(inputValue)) {
      setCount(inputValue)
    }
  }

  const updateProductNumbers = (newNumber) => {
    setAddedList((prevList) => {
      return prevList.map((item) => {
        if (item.id === product.data.id) {
          return { ...item, numbers: newNumber }
        }
        return item
      })
    })
  }

  useEffect(() => {
    updateProductNumbers(counter)
  }, [counter])

  return (
    <NumberButton>
      <button onClick={() => counter > 0 && setCount(counter - 1)}>-</button>
      <Input type='text' value={counter} onChange={handleChange}></Input>
      <button onClick={() => setCount(counter + 1)}>+</button>
    </NumberButton>
  )
}

export default InputNumber
