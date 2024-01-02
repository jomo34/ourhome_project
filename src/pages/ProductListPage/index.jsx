import { Wrapper } from 'styles/style'
import { Products } from 'pages/ProductListPage/styles'
import { Modal } from 'antd'
import FirstProduct from 'components/ProductComponents/FirstProduct'
import SecondProduct from 'components/ProductComponents/SecondProduct'
import ThirdProduct from 'components/ProductComponents/ThirdProduct'
import FourthProduct from 'components/ProductComponents/FourthProduct'
import FifthProduct from 'components/ProductComponents/FifthProduct'
import SixthProduct from 'components/ProductComponents/SixthProduct'
import SeventhProduct from 'components/ProductComponents/SeventhProduct'
import EighthProduct from 'components/ProductComponents/EighthProduct'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from 'states/ModalState'
import { productIds, selectedProductId } from 'states/ProductState'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const ProductListPage = () => {
  const navigate = useNavigate()
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useRecoilState(modalState)
  const [products, setProducts] = useRecoilState(productIds)
  const [productId] = useRecoilValue(selectedProductId)

  const handleAddOK = () => {
    const productIds = [...products]
    if (productIds.length) {
      productIds.push(productId)
      productIds.sort((a, b) => a - b)
      setProducts(productIds)
    } else {
      setProducts([productId])
    }
    setIsAddModalOpen(false)
    setIsMoveModalOpen(true)
  }

  return (
    <Wrapper>
      <Modal
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
  )
}

export default ProductListPage
