import {
  CurrentPrice,
  DiscountRate,
  Image,
  ImageDiv,
  NumberDiv,
  OriginPrice,
  ProductButton,
  ProductDesc,
  ProductName,
  ProductPrice,
  ProductStore,
} from 'components/style'
import { useRecoilState } from 'recoil'
import { modalState } from 'states/ModalState'
import { selectedProductId } from 'states/ProductState'
import image from 'images/06.jpeg'

const SixthProduct = () => {
  const [, setIsModalOpen] = useRecoilState(modalState)
  const [, setSelectedProductId] = useRecoilState(selectedProductId)

  return (
    <ProductButton
      aria-label='6번째 상품'
      onClick={() => {
        setSelectedProductId('6')
        setIsModalOpen(true)
      }}
    >
      <NumberDiv>06</NumberDiv>
      <ImageDiv>
        <Image src={image} />
      </ImageDiv>
      <ProductName>아워홈 들기름김 전장 20g (4g X 5매)</ProductName>
      <ProductDesc>전장김, 들기름, 반찬, 간식</ProductDesc>
      <ProductPrice>
        <CurrentPrice>2,280원</CurrentPrice>
        <OriginPrice>2,400원</OriginPrice>
        <DiscountRate>5%</DiscountRate>
      </ProductPrice>
      <ProductStore howToStore={'room'}>실온</ProductStore>
    </ProductButton>
  )
}

export default SixthProduct
