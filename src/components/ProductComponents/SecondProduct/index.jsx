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

const SecondProduct = () => {
  return (
    <ProductDiv>
      <NumberDiv>02</NumberDiv>
      <ImageDiv>사진</ImageDiv>
      <ProductName>아워홈 포차 꼬치어묵 (시원한맛)</ProductName>
      <ProductDesc>국산 꽃게육수를 시원하게 담은 어묵탕</ProductDesc>
      <ProductPrice>
        <CurrentPrice>3,900원</CurrentPrice>
        <OriginPrice>5,500원</OriginPrice>
        <DiscountRate>30%</DiscountRate>
      </ProductPrice>
      <ProductStore howToStore={'frozen'}>냉동</ProductStore>
    </ProductDiv>
  )
}

export default SecondProduct