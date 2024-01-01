import {
  CurrentPrice,
  ImageDiv,
  NumberDiv,
  ProductDesc,
  ProductDiv,
  ProductName,
  ProductPrice,
  ProductStore,
} from 'components/ProductComponents/style'

const SeventhProduct = () => {
  return (
    <ProductDiv>
      <NumberDiv>07</NumberDiv>
      <ImageDiv>사진</ImageDiv>
      <ProductName>소고기장조림 200g</ProductName>
      <ProductDesc>장조림, 간편반찬, 꽈리고추, 곤약</ProductDesc>
      <ProductPrice>
        <CurrentPrice>3,670원</CurrentPrice>
      </ProductPrice>
      <ProductStore howToStore={'refrigeration'}>냉장</ProductStore>
    </ProductDiv>
  )
}

export default SeventhProduct
