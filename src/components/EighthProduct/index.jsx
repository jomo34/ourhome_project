import {
  CurrentPrice,
  DiscountRate,
  ImageDiv,
  NumberDiv,
  OriginPrice,
  ProductDesc,
  ProductName,
  ProductPrice,
  ProductStore,
  Image,
  ProductButton,
} from 'components/style'
import { useRecoilState } from 'recoil'
import { modalState } from 'states/ModalState'
import { selectedProductId } from 'states/ProductState'
import image from 'images/08.jpeg'

const EighthProduct = () => {
  const [, setIsModalOpen] = useRecoilState(modalState)
  const [, setSelectedProductId] = useRecoilState(selectedProductId)

  return (
    <ProductButton
      aria-label='8번째 상품'
      onClick={() => {
        setSelectedProductId('8')
        setIsModalOpen(true)
      }}
    >
      <NumberDiv>08</NumberDiv>
      <ImageDiv>
        <Image src={image} />
      </ImageDiv>
      <ProductName>매콤한 칠리 닭가슴살 110g (냉장)</ProductName>
      <ProductDesc>단백질 함량 27g, 매콤한 칠리맛</ProductDesc>
      <ProductPrice>
        <CurrentPrice>2,790원</CurrentPrice>
        <OriginPrice>2,980원</OriginPrice>
        <DiscountRate>6%</DiscountRate>
      </ProductPrice>
      <ProductStore howToStore={'refrigeration'}>냉장</ProductStore>
    </ProductButton>
  )
}

export default EighthProduct
