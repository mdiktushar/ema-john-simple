import React from 'react';
import Cart from '../shop/Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h2>Orders Page: {cart.length}</h2>
            </div>
            <div className='cart-container'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;