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
} from 'components/style'
import { useRecoilState } from 'recoil'
import { modalState } from 'states/ModalState'
import { selectedProductId } from 'states/ProductState'

const SixthProduct = () => {
  const [, setIsModalOpen] = useRecoilState(modalState)
  const [, setSelectedProductId] = useRecoilState(selectedProductId)

  return (
    <ProductDiv
      onClick={() => {
        setSelectedProductId('6')
        setIsModalOpen(true)
      }}
    >
      <NumberDiv>06</NumberDiv>
      <ImageDiv>사진</ImageDiv>
      <ProductName>아워홈 들기름김 전장 20g (4g X 5매)</ProductName>
      <ProductDesc>전장김, 들기름, 반찬, 간식</ProductDesc>
      <ProductPrice>
        <CurrentPrice>2,280원</CurrentPrice>
        <OriginPrice>2,400원</OriginPrice>
        <DiscountRate>5%</DiscountRate>
      </ProductPrice>
      <ProductStore howToStore={'room'}>실온</ProductStore>
    </ProductDiv>
  )
}

export default SixthProduct
