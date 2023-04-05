import React from 'react';
import Cart from '../shop/Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Item from './Item/Item';
import './Orders.css'

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(item => <Item key={item.id} item={item} />)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;