import { Wrapper } from 'styles/style'
import { Products } from 'pages/ProductListPage/styles'
import FirstProduct from 'components/ProductComponents/FirstProduct'
import SecondProduct from 'components/ProductComponents/SecondProduct'
import ThirdProduct from 'components/ProductComponents/ThirdProduct'
import FourthProduct from 'components/ProductComponents/FourthProduct'
import FifthProduct from 'components/ProductComponents/FifthProduct'
import SixthProduct from 'components/ProductComponents/SixthProduct'
import SeventhProduct from 'components/ProductComponents/SeventhProduct'
import EighthProduct from 'components/ProductComponents/EighthProduct'
const ProductListPage = () => {
  return (
    <Wrapper>
      <Products>
        <FirstProduct />
        <SecondProduct />
        <ThirdProduct />
        <FourthProduct />
        <FifthProduct />
        <SixthProduct />
        <SeventhProduct />
        <EighthProduct />
      </Products>
    </Wrapper>
  )
}

export default ProductListPage
