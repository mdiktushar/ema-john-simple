import React from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Item = ({ item }) => {
  const { id, img, price, name, quantity } = item;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price: <span className="orange-text">${price}</span>
        </p>
        <p>
          Order Quantity: <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button className="btn-delete">
        <FontAwesomeIcon
          icon={faTrashCan}
          size="xl"
          style={{ color: "#ff0000" }}
        />
      </button>
    </div>
  );
};

export default Item;
