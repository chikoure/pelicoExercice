import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import ProductPage from './pages/Product';
import Products from './pages/Products';

function App() {


  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/"> Home </Link>
          <Link to="/products"> Products </Link>
          <Link to="/cart"> Cart </Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <div>Home</div> } />
        <Route path='/products' element={ <Products/> } />
        <Route path='/products/:id' element={ <ProductPage/> } />
        <Route path='/cart' element={ <Cart/> } />
      </Routes>
    </div>
  );
}

export default App;
