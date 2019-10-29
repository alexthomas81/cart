import React from 'react';

function CartDetails(props) {
    return (
        <div className="prodItem">
            {props.cartItems.map(item => (
                <div key={item.id}>
                    {item.name}<br/><br/>
                    <img src={item.path} alt={item.name} className="productImage" />
                </div>
            ))}
        </div>
    )
}

export default CartDetails;