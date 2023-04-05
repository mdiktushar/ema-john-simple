import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "./Cart/Cart";
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

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id
    for (const id in storedCart) {
      // step 2: get the product by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // Check if addedProduct is not undefined
        // step 3: get quantity of the product
        let quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added products to savedCart
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  /*	
    Adding products in cart
  */
  const addToCartHandler = (product) => {
    // if product doesn't exist int the cart, then set quantity = 1
    // if exist update the quantity by 1
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity += 1;
      const remaining = cart.filter(pd => pd.id !== product.id)
      newCart = [...remaining, exists]
    }
    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
