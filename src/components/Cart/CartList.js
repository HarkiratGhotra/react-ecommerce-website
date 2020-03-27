import React from 'react';
import CartItem from './CartItem';

export default function CartList(props) {
    console.log('props',props)
    const {cart} = props.value;
    return (
        <div className= "container-fluid">
            {cart.map((item) => {
                return <CartItem key={item.id} item={item} value={props.value}/>
            })}
            this is list
        </div>
    )
}