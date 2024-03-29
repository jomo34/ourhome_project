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
import image from 'images/02.jpeg'

const SecondProduct = () => {
  const [, setIsModalOpen] = useRecoilState(modalState)
  const [, setSelectedProductId] = useRecoilState(selectedProductId)

  return (
    <ProductButton
      aria-label='2번째 상품'
      onClick={() => {
        setSelectedProductId('2')
        setIsModalOpen(true)
      }}
    >
      <NumberDiv>02</NumberDiv>
      <ImageDiv>
        <Image src={image} />
      </ImageDiv>
      <ProductName>아워홈 포차 꼬치어묵 (시원한맛)</ProductName>
      <ProductDesc>국산 꽃게육수를 시원하게 담은 어묵탕</ProductDesc>
      <ProductPrice>
        <CurrentPrice>3,900원</CurrentPrice>
        <OriginPrice>5,500원</OriginPrice>
        <DiscountRate>30%</DiscountRate>
      </ProductPrice>
      <ProductStore howToStore={'frozen'}>냉동</ProductStore>
    </ProductButton>
  )
}

export default SecondProduct
