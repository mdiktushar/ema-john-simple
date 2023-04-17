import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { Link, Navigate } from "react-router-dom";

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
  // console.log(props.cart);
  return (
    <div className="Cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity} </p>
      <p>Total Price: {totalPrice}$</p>
      <p>Total Shipping: {totalShipping}</p>
      <p>Tax: {tax}$</p>
      <h6>Grand Total: {grandTotal}$</h6>

      <button onClick={props.clearCartHandler} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashCan} style={{ color: "#fbfaf4" }} />
      </button>
      <Link to={`/checkout`}>
        <button
          style={{ background: "#0c510c" }}
          className="btn-clear-cart"
        >
          <span>Check Out</span>
        </button>
      </Link>
    </div>
  );
};

export default Cart;
