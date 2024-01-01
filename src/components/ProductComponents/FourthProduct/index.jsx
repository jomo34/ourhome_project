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

const FourthProduct = () => {
  return (
    <ProductDiv>
      <NumberDiv>04</NumberDiv>
      <ImageDiv>사진</ImageDiv>
      <ProductName>뼈없는 갈비탕 400g</ProductName>
      <ProductDesc>뼈를 발라내어 먹기 편한 뼈없는 갈비탕</ProductDesc>
      <ProductPrice>
        <CurrentPrice>5,940원</CurrentPrice>
        <OriginPrice>6,600원</OriginPrice>
        <DiscountRate>10%</DiscountRate>
      </ProductPrice>
      <ProductStore howToStore={'room'}>실온</ProductStore>
    </ProductDiv>
  )
}

export default FourthProduct