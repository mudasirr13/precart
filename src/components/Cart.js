import React, { useContext, } from 'react';
import { ProductContext } from '../context/ProductContext';
import "./style.css"

const Cart = () => {
  const { cartProducts } = useContext(ProductContext);

  // Calculate the total price
  const totalPrice = cartProducts.reduce((acc, product) => acc + parseFloat(product.price), 0);

  return (
    <div className='cart'>
      <h2>Cart</h2>
      <ul>
        {cartProducts.map((product) => (
          <li key={product.id}>
           <h3> Product :{product.name} </h3> 
           <p>Price :${ product.price }</p>
          </li>
        ))}
      </ul>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;