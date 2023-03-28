import React from "react";
import "./Cart.css";

const Cart = (props) => {
  let totalPrice = 0;
  let totalShipping = 0;
  for (const cart of props.cart) {
    totalPrice += cart.price;
    totalShipping += cart.shipping;
  }
  const tax = (totalPrice * 15) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  console.log(props.cart);
  return (
    <div className="Cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {props.cart.length} </p>
      <p>Total Price: {totalPrice}$</p>
      <p>Total Shipping: {totalShipping}</p>
      <p>Tax: {tax}$</p>
      <h6>Grand Total: {grandTotal}$</h6>
    </div>
  );
};

export default Cart;
