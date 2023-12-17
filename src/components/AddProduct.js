import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import "./style.css"

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const [productData, setProductData] = useState({
    name: '',
    id: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    
    if (!productData.name || !productData.id || !productData.description || !productData.price) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    
    addProduct(productData);
    setProductData({ name: '', id: '', description: '', price: '' });
    alert("Product added");
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product ID:
          <input
            type="number"
            name="id"
            value={productData.id}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Description:
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button  className="btn" type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;