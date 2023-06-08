import React from 'react';
import { AllWine } from './AllWine';

export const Cart = () => {
  const totalPrice = 0;
  const products = [];

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
