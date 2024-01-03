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
import image from 'images/04.jpeg'

const FourthProduct = () => {
  const [, setIsModalOpen] = useRecoilState(modalState)
  const [, setSelectedProductId] = useRecoilState(selectedProductId)

  return (
    <ProductButton
      aria-label='4번째 상품'
      onClick={() => {
        setSelectedProductId('4')
        setIsModalOpen(true)
      }}
    >
      <NumberDiv>04</NumberDiv>
      <ImageDiv>
        <Image src={image} />
      </ImageDiv>
      <ProductName>뼈없는 갈비탕 400g</ProductName>
      <ProductDesc>뼈를 발라내어 먹기 편한 뼈없는 갈비탕</ProductDesc>
      <ProductPrice>
        <CurrentPrice>5,940원</CurrentPrice>
        <OriginPrice>6,600원</OriginPrice>
        <DiscountRate>10%</DiscountRate>
      </ProductPrice>
      <ProductStore howToStore={'room'}>실온</ProductStore>
    </ProductButton>
  )
}

export default FourthProduct
