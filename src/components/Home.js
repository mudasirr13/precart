import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import "./style.css"


const Home = () => {
  const { homeProducts, addToCart} = useContext(ProductContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert('Product added to cart');
  };

  return (
    <div className='main-home'>
      <h2 style={{ fontSize: '30px', color: 'black' }}>Your Products</h2>
      {homeProducts.length === 0 ? (
        <p>No products available. Add products through the AddProduct page.</p>
      ) : (
        <ul>
          {homeProducts.map((product) => (
            <li key={product.id}>
              <h3>Product Name:{product.name} </h3>
               <p>Price :${product.price} </p>
               <p>Id:{product.id}</p>
               <p>Description :{product.description}</p>

              <button className='btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>{' '}
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;