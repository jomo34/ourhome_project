import {
  CurrentPrice,
  DiscountRate,
  Image,
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
import image from 'images/03.jpeg'

const ThirdProduct = () => {
  const [, setIsModalOpen] = useRecoilState(modalState)
  const [, setSelectedProductId] = useRecoilState(selectedProductId)

  return (
    <ProductDiv
      onClick={() => {
        setSelectedProductId('3')
        setIsModalOpen(true)
      }}
    >
      <NumberDiv>03</NumberDiv>
      <ImageDiv>
        <Image src={image} />
      </ImageDiv>
      <ProductName>얼큰한 육개장 300g</ProductName>
      <ProductDesc>직접 솥에서 볶아 더 얼큰하고 맛있는</ProductDesc>
      <ProductPrice>
        <CurrentPrice>3,000원</CurrentPrice>
        <OriginPrice>3,150원</OriginPrice>
        <DiscountRate>5%</DiscountRate>
      </ProductPrice>
      <ProductStore howToStore={'room'}>실온</ProductStore>
    </ProductDiv>
  )
}

export default ThirdProduct
