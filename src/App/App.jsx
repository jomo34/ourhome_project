import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import loadable from '@loadable/component'
import 'App/App.css'
import { useMediaQuery } from 'react-responsive'

const ProductListPage = loadable(() => import('pages/ProductListPage'))
const ShoppingCartPage = loadable(() => import('pages/ShoppingCartPage'))
const SmallScreenPage = loadable(() => import('pages/SmallScreenPage'))
function App() {
  const isSmallWidth = useMediaQuery({ maxWidth: 950 })
  const isSmallHeight = useMediaQuery({ maxHeight: 600 })

  const isSmallScreen = isSmallWidth || isSmallHeight
  if (isSmallScreen) {
    return <SmallScreenPage />
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate replace to='/main' />} />
          <Route path='/main' element={<ProductListPage />} />
          <Route path='/shopping-cart' element={<ShoppingCartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
