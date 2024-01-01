import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import loadable from '@loadable/component';
import 'App/App.css';

const ProductListPage = loadable(() => import('pages/ProductListPage'));
const ProductDetailPage = loadable(() => import('pages/ProductDetailPage'));
const ShoppingCartPage = loadable(() => import('pages/ShoppingCartPage'));

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Navigate replace to="/main" />} />
                  <Route path="/main" element={<ProductListPage />} />
                  <Route path="/detail" element={<ProductDetailPage />} />
                  <Route path="/shopping-cart" element={<ShoppingCartPage />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
