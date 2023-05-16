import React from 'react';
import { useShoppingContext } from '../contexts/ShoppingContext';

function Cart() {
  const { cartItems, deleteFromCart, getCartQuantity } = useShoppingContext();
  return (
    <div>
      <span>Items quantity: { getCartQuantity() }</span>
      {
        cartItems.map(
          item => {
            return (
              <div key={item.id}>
                {
                  item.title
                }
                <button onClick={ () => deleteFromCart(item) }> delete from cart</button>
              </div>
            )
          }
        )
      }
    </div>
  );
}

export default Cart;
