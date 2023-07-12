import { useEffect } from 'react';
import Categories from './Components/Categories';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import SimpleCart from './Components/SimpleCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/App.scss';
import Storefront from './Components/Storefront';
import ProductDetails from './Components/ProductDetails';
import ShoppingCart from './Components/ShoppingCart';
// import { getCategories } from './store/categories';

function App() {

  // useEffect(() => {
  //   dispatch(getCategories());
  // }, []);

  return (
    <>
      <BrowserRouter>
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Storefront />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
