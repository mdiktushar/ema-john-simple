import React from "react";
import "./Cart.css";

const Cart = (props) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const cart of props.cart) {
    // const count = cart.quantity || 1;
    const count = cart.quantity;
    totalPrice += cart.price * count;
    totalShipping += cart.shipping * count;
    quantity = quantity += count;
  }
  const tax = (totalPrice * 15) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  console.log(props.cart);
  return (
    <div className="Cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity} </p>
      <p>Total Price: {totalPrice}$</p>
      <p>Total Shipping: {totalShipping}</p>
      <p>Tax: {tax}$</p>
      <h6>Grand Total: {grandTotal}$</h6>
    </div>
  );
};

export default Cart;
