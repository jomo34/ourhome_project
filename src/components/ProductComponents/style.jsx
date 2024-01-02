import styled from '@emotion/styled'

export const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1vh 3vw;
  width: calc(20% - 3vw);
`

export const NumberDiv = styled.div`
  font-weight: bold;
  font-size: xx-large;
`

export const ImageDiv = styled.div`
  height: 30vh;
  width: 230px;
  border: 1px solid gray;
  margin: 1vh 0 1vh 0;
`

export const BestButton = styled.div`
  background-color: orangered;
  color: white;
  width: 50px;
  height: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 5px;
  font-size: small;
  font-weight: bolder;
  margin-bottom: 0.5vh;
`

export const ProductName = styled.div`
  font-weight: bold;
`

export const ProductDesc = styled.div`
  font-size: small;
  color: gray;
  margin-top: 0.5vh;
`

export const ProductPrice = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5vw;
  align-items: flex-end;
  margin: 1vh 0;
`

export const CurrentPrice = styled.div`
  font-size: x-large;
  font-weight: bolder;
`

export const OriginPrice = styled.div`
  text-decoration: line-through;
  color: dimgray;
`

export const DiscountRate = styled.div`
  color: orangered;
`

export const ProductStore = styled.div`
  font-size: small;
  color: ${(props) => {
    if (props.howToStore === 'room') {
      return 'black'
    } else if (props.howToStore === 'frozen') {
      return 'royalblue'
    } else {
      return 'skyblue'
    }
  }};
`
