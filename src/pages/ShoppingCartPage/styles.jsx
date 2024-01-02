import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
`

export const Index = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 6vh;
  background-color: whitesmoke;
  font-weight: bold;
`

export const ProductName = styled.div`
  width: 55%;
  justify-content: center;
  display: flex;
`

export const ProductPrice = styled.div`
  width: 10%;
  margin-left: 3vw;
`

export const ProductCount = styled.div`
  width: 10%;
  margin-left: 3vw;
`

export const ProductTotalPrice = styled.div`
  width: 10%;
`

export const EachBar = styled.div`
  display: flex;
  width: 80%;
  align-items: stretch;
  flex-direction: column;
`

export const EachProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 3vh 1vw;
  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`
export const ImageNName = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`

export const ProductImage = styled.div`
  width: 5vw;
  height: 10vh;
  border: 1px solid lightgray;
  margin-right: 1vw;
  align-items: center;
  justify-content: center;
  display: flex;
`

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
`

export const BoldString = styled.div`
  font-weight: bold;
`

export const LineThroughString = styled.div`
  text-decoration: line-through;
  color: gray;
`

export const CurrentPriceMultiNumbers = styled.div`
  font-weight: bold;
  width: 10%;
`

export const PurchaseIndex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  height: 10vh;
  background-color: whitesmoke;
`

export const TotalPrice = styled.div`
  display: flex;
  width: 20%;
  align-items: flex-end;
  justify-content: center;
`

export const DeliveryTip = styled.div`
  display: flex;
  width: 30%;
  align-items: flex-end;
  justify-content: center;
`

export const TotalPurchase = styled.div`
  display: flex;
  width: 25%;
  align-items: flex-end;
`

export const BoldPrice = styled.div`
  font-weight: bolder;
  font-size: x-large;
  margin-left: 1vw;
`

export const GrayString = styled.div`
  color: gray;
`

export const Flag = styled.div`
  color: gray;
  font-size: xx-large;
`

export const CartEmpty = styled.div`
  background-color: whitesmoke;
  font-size: xx-large;
  width: 80%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
