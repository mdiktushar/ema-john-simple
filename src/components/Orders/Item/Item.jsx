import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const {id, img, price, name, quantity} = item
    return (
        <div className='review-item'>
            <img src={img} alt="" />
        </div>
    );
};

export default Item;