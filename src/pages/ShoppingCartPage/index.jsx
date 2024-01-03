import { useRecoilValue } from 'recoil'
import { addedProductList } from 'states/ProductState'
import {
  BoldPrice,
  BoldString,
  CartEmpty,
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
  Image,
} from 'pages/ShoppingCartPage/styles'
import InputNumber from 'components/InputNumber'
import { useEffect, useState } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const ShoppingCartPage = () => {
  const navigate = useNavigate()
  const productCartList = useRecoilValue(addedProductList)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    const newTotalAmount = productCartList.reduce((acc, product) => {
      return acc + product.currentPrice * product.numbers
    }, 0)

    setTotalAmount(newTotalAmount)
  }, [productCartList])

  return (
    <>
      <Button
        onClick={() => {
          navigate('/main')
        }}
      >
        뒤로가기
      </Button>
      <Wrapper aria-label='장바구니'>
        {productCartList.length ? (
          <>
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
                    <ProductImage>
                      <Image src={require(`images/0${product.id}.jpeg`)} />
                    </ProductImage>
                    <p>{product.name}</p>
                  </ImageNName>
                  <Price>
                    {product.currentPrice === product.originPrice ? (
                      <BoldString>
                        {product.currentPrice.toLocaleString('ko-KR')}원
                      </BoldString>
                    ) : (
                      <BoldString>
                        {product.currentPrice.toLocaleString('ko-KR')}원
                        <LineThroughString>
                          {product.originPrice.toLocaleString('ko-KR')}원
                        </LineThroughString>
                      </BoldString>
                    )}
                  </Price>
                  <InputNumber data={product}></InputNumber>
                  <CurrentPriceMultiNumbers aria-label='물건의 총 금액'>
                    {(product.currentPrice * product.numbers).toLocaleString(
                      'ko-KR'
                    )}
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
                <BoldPrice aria-label='배송비'>
                  {(totalAmount >= 30000 ? 0 : 3000).toLocaleString('ko-KR')}원
                </BoldPrice>
                <GrayString>(3만원이상 구매 시 무료배송)</GrayString>
              </DeliveryTip>
              <Flag>=</Flag>
              <TotalPurchase>
                <div>결제 금액</div>
                <BoldPrice aria-label='주문의 총 결제 금액'>
                  {totalAmount >= 30000
                    ? totalAmount.toLocaleString('ko-KR')
                    : (totalAmount + 3000).toLocaleString('ko-KR')}
                  원
                </BoldPrice>
              </TotalPurchase>
            </PurchaseIndex>
          </>
        ) : (
          <CartEmpty aria-label='빈 장바구니'>
            장바구니가 비어 있습니다.
          </CartEmpty>
        )}
      </Wrapper>
    </>
  )
}

export default ShoppingCartPage
