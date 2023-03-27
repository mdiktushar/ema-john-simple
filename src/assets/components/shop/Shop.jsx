import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("/Data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  /*	
    Adding products in cart
  */
  const addToCartHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart)
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        <p>Selected Items: {cart.length} </p>
      </div>
    </div>
  );
};

export default Shop;
