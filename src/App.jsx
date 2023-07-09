import Categories from './Components/Categories';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import SimpleCart from './Components/SimpleCart';
import '../src/App.scss';

function App() {

  return (
    <>
    <div className="content">
      <Header />
      <Categories />
      <SimpleCart />
      <Products />
      </div>
      <Footer />
    </>
  )
}

export default App
