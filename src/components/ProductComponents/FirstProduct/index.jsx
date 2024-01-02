import {
  CurrentPrice,
  DiscountRate,
  ImageDiv,
  NumberDiv,
  OriginPrice,
  ProductDesc,
  ProductDiv,
  ProductName,
  ProductPrice,
  ProductStore,
} from 'components/ProductComponents/style'
import { useRecoilState } from 'recoil'
import { modalState } from 'states/ModalState'
import { selectedProductId } from 'states/ProductState'

const FirstProduct = () => {
  const [, setIsModalOpen] = useRecoilState(modalState)
  const [, setSelectedProductId] = useRecoilState(selectedProductId)

  return (
    <ProductDiv
      onClick={() => {
        setSelectedProductId('1')
        setIsModalOpen(true)
      }}
    >
      <NumberDiv>01</NumberDiv>
      <ImageDiv>사진</ImageDiv>
      <ProductName>진한 사골곰탕 300g</ProductName>
      <ProductDesc>100% 사골로 고은 진한 사골곰탕</ProductDesc>
      <ProductPrice>
        <CurrentPrice>1,590원</CurrentPrice>
        <OriginPrice>1,750원</OriginPrice>
        <DiscountRate>9%</DiscountRate>
      </ProductPrice>
      <ProductStore howToStore={'room'}>실온</ProductStore>
    </ProductDiv>
  )
}

export default FirstProduct
