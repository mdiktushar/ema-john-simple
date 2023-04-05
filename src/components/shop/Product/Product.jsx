import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { name, seller, price, img, ratings } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name"> {name} </h6>
        <p>Price: {price} </p>
        <p>Manufacturer: {seller} </p>
        <p>Ratings: {ratings} Stars</p>
      </div>
      <button
        onClick={() => props.addToCartHandler(props.product)}
        className="btn-cart"
      >
        Add to Cart <FontAwesomeIcon icon={faCoffee} />
      </button>
    </div>
  );
};

export default Product;
