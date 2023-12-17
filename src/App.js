import React, {useState} from 'react';
import { ProductProvider } from '../src/context/ProductContext';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <ProductProvider>
      <div>
        <nav className='nav-bar'>
          <a href="#home" onClick={() => handleNavigation('home')}>
            Home
          </a>{' '}
          {' '}
          <a href="#addproduct" onClick={() => handleNavigation('addproduct')}>
            Add Product
          </a>{' '}
          {' '}
          <a href="#cart" onClick={() => handleNavigation('cart')}>
            Cart
          </a>
        </nav>
        
        <main>
          {currentPage === 'home' && <Home />}
          {currentPage === 'addproduct' && <AddProduct />}
          {currentPage === 'cart' && <Cart />}
        </main>
      </div>
    </ProductProvider>
  );
};

export default App;