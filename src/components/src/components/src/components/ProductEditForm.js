import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../actions';

const ProductEditForm = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: product.id,
      name,
      price,
    };
    dispatch(updateProduct(updatedProduct));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProductEditForm;
