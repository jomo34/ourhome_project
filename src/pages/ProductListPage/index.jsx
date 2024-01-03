import { Wrapper, Products } from 'pages/ProductListPage/styles'
import { Button, Modal } from 'antd'
import FirstProduct from 'components/FirstProduct'
import SecondProduct from 'components/SecondProduct'
import ThirdProduct from 'components/ThirdProduct'
import FourthProduct from 'components/FourthProduct'
import FifthProduct from 'components/FifthProduct'
import SixthProduct from 'components/SixthProduct'
import SeventhProduct from 'components/SeventhProduct'
import EighthProduct from 'components/EighthProduct'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from 'states/ModalState'
import { addedProductList, selectedProductId } from 'states/ProductState'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productsList from 'pages/ProductListPage/ProductList.json'

const ProductListPage = () => {
  const navigate = useNavigate()
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useRecoilState(modalState)
  const [addedProducts, setAddedProducts] = useRecoilState(addedProductList)
  const [productId] = useRecoilValue(selectedProductId)

  const handleAddOK = () => {
    updateCartList()
    setIsAddModalOpen(false)
    setIsMoveModalOpen(true)
  }

  const updateCartList = () => {
    const updatedList = [...addedProducts]
    const product = productsList.find((item) => item.id === Number(productId))

    if (product) {
      const existingIndex = updatedList.findIndex(
        (item) => item.id === product.id
      )

      if (existingIndex !== -1) {
        updatedList[existingIndex] = {
          ...updatedList[existingIndex],
          numbers: updatedList[existingIndex].numbers + 1,
        }
      } else {
        updatedList.push({
          ...product,
          numbers: 1,
        })
      }
    }
    setAddedProducts(updatedList)
  }

  return (
    <>
      <Button
        aria-label='장바구니로 이동'
        onClick={() => {
          navigate('/shopping-cart')
        }}
      >
        장바구니로 이동하기
      </Button>
      <Wrapper>
        <Modal
          aria-label='상품 추가'
          title='상품 추가'
          open={isAddModalOpen}
          onOk={handleAddOK}
          onCancel={() => {
            setIsAddModalOpen(false)
          }}
        >
          상품을 추가하시겠습니까?
        </Modal>
        <Modal
          aria-label='장바구니로 이동'
          title='장바구니로 이동'
          open={isMoveModalOpen}
          onOk={() => {
            navigate('/shopping-cart')
          }}
          onCancel={() => {
            setIsMoveModalOpen(false)
          }}
        >
          장바구니로 이동하시겠습니까?
        </Modal>
        <Products>
          <FirstProduct />
          <SecondProduct />
          <ThirdProduct />
          <FourthProduct />
          <FifthProduct />
          <SixthProduct />
          <SeventhProduct />
          <EighthProduct />
        </Products>
      </Wrapper>
    </>
  )
}

export default ProductListPage
