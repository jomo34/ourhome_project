import { useRecoilValue } from 'recoil'
import { addedProductList } from 'states/ProductState'
import {
  BoldPrice,
  BoldString,
  CurrentPriceMultiNumbers,
  DeliveryTip,
  EachBar,
  EachProduct,
  Flag,
  GrayString,
  ImageNName,
  Index,
  LineThroughString,
  Price,
  ProductCount,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductTotalPrice,
  PurchaseIndex,
  TotalPrice,
  TotalPurchase,
  Wrapper,
} from 'pages/ShoppingCartPage/styles'
import InputNumber from 'components/InputNumber'
import { useEffect, useState } from 'react'

const ShoppingCartPage = () => {
  const productCartList = useRecoilValue(addedProductList)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    const newTotalAmount = productCartList.reduce((acc, product) => {
      return acc + product.currentPrice * product.numbers
    }, 0)

    setTotalAmount(newTotalAmount)
  }, [productCartList])

  return (
    <Wrapper>
      <Index>
        <ProductName>상품명</ProductName>
        <ProductPrice>구매가</ProductPrice>
        <ProductCount>수량</ProductCount>
        <ProductTotalPrice>금액</ProductTotalPrice>
      </Index>
      <EachBar>
        {productCartList.map((product) => (
          <EachProduct key={product.id}>
            <ImageNName>
              <ProductImage>{product.id}</ProductImage>
              <p>{product.name}</p>
            </ImageNName>
            <Price>
              <BoldString>
                {product.currentPrice.toLocaleString('ko-KR')}원
              </BoldString>
              <LineThroughString>
                {product.originPrice.toLocaleString('ko-KR')}원
              </LineThroughString>
            </Price>
            <InputNumber data={product}></InputNumber>
            <CurrentPriceMultiNumbers>
              {(product.currentPrice * product.numbers).toLocaleString('ko-KR')}
              원
            </CurrentPriceMultiNumbers>
          </EachProduct>
        ))}
      </EachBar>
      <PurchaseIndex>
        <TotalPrice>
          <div>총 금액</div>
          <BoldPrice>{totalAmount.toLocaleString('ko-KR')}원</BoldPrice>
        </TotalPrice>
        <Flag>+</Flag>
        <DeliveryTip>
          <div>배송비</div>
          <BoldPrice>
            {(totalAmount >= 30000 ? 0 : 3000).toLocaleString('ko-KR')}원
          </BoldPrice>
          <GrayString>(3만원이상 구매 시 무료배송)</GrayString>
        </DeliveryTip>
        <Flag>=</Flag>
        <TotalPurchase>
          <div>결제 금액</div>
          <BoldPrice>
            {(totalAmount >= 30000
              ? totalAmount
              : totalAmount + 3000
            ).toLocaleString('ko-KR')}
            원
          </BoldPrice>
        </TotalPurchase>
      </PurchaseIndex>
    </Wrapper>
  )
}

export default ShoppingCartPage
