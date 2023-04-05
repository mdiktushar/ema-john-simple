import React, { useState } from "react";
import Cart from "../shop/Cart/Cart";
import { useLoaderData } from "react-router-dom";
import Item from "./Item/Item";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const removeFromCartHandler = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCartHandler = () => {
    setCart([])
    deleteShoppingCart()
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((item) => (
          <Item
            key={item.id}
            item={item}
            removeFromCartHandler={removeFromCartHandler}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCartHandler={clearCartHandler} />
      </div>
    </div>
  );
};

export default Orders;
