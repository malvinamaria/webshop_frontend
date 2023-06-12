import React from 'react';
import { useSelector } from 'react-redux';
import { AllWine } from './AllWine';

export const Cart = () => {
  const totalPrice = 0;
  const products = useSelector((store) => store.cartSlice.items);

  return (
    <div className="cart">
      <div className="total">
        Total: {totalPrice} items: {products}
      </div>

      <ul className="cart-items">
        {products.map((product) => (
          <AllWine key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
