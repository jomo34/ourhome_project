import {
  BestButton,
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
import image from 'images/05.jpeg'

const FifthProduct = () => {
  const [, setIsModalOpen] = useRecoilState(modalState)
  const [, setSelectedProductId] = useRecoilState(selectedProductId)

  return (
    <ProductDiv
      onClick={() => {
        setSelectedProductId('5')
        setIsModalOpen(true)
      }}
    >
      <NumberDiv>05</NumberDiv>
      <ImageDiv>
        <Image src={image} />
      </ImageDiv>
      <BestButton>베스트</BestButton>
      <ProductName>아워홈 치킨스테이크 오리지널 920g (4인분)</ProductName>
      <ProductDesc>겉바속촉 통닭다리살 오븐구이 치킨스테이크</ProductDesc>
      <ProductPrice>
        <CurrentPrice>17,000원</CurrentPrice>
        <OriginPrice>17,900원</OriginPrice>
        <DiscountRate>5%</DiscountRate>
      </ProductPrice>
      <ProductStore howToStore={'frozen'}>냉동</ProductStore>
    </ProductDiv>
  )
}

export default FifthProduct
