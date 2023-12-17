import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [homeProducts, setHomeProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const addProduct = (product) => {
    setHomeProducts([...homeProducts, product]);
  };

  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  return (
    <ProductContext.Provider value={{ homeProducts, addProduct, cartProducts, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};