import React from 'react'
import CartContext from './cart-content'

const CartProvider = props => {
const addItemToCartHandler = item => {};

const RemoveItemFromCartHandler = id => {};

const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: RemoveItemFromCartHandler
};

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider
