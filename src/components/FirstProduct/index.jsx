import {
  CurrentPrice,
  DiscountRate,
  ImageDiv,
  NumberDiv,
  OriginPrice,
  ProductDesc,
  ProductButton,
  ProductName,
  ProductPrice,
  ProductStore,
  Image,
} from 'components/style'
import { useRecoilState } from 'recoil'
import { modalState } from 'states/ModalState'
import { selectedProductId } from 'states/ProductState'
import image from 'images/01.jpeg'

const FirstProduct = () => {
  const [, setIsModalOpen] = useRecoilState(modalState)
  const [, setSelectedProductId] = useRecoilState(selectedProductId)

  return (
    <ProductButton
      aria-label='1번째 상품'
      onClick={() => {
        setSelectedProductId('1')
        setIsModalOpen(true)
      }}
    >
      <NumberDiv>01</NumberDiv>
      <ImageDiv>
        <Image src={image} alt={'01'} />
      </ImageDiv>
      <ProductName>진한 사골곰탕 300g</ProductName>
      <ProductDesc>100% 사골로 고은 진한 사골곰탕</ProductDesc>
      <ProductPrice>
        <CurrentPrice>1,590원</CurrentPrice>
        <OriginPrice>1,750원</OriginPrice>
        <DiscountRate>9%</DiscountRate>
      </ProductPrice>
      <ProductStore howToStore={'room'}>실온</ProductStore>
    </ProductButton>
  )
}

export default FirstProduct
