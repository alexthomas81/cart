import React from 'react';

function Cart(props) {
    return (
        <div className="prodItem">
            Basket Count : {props.cartDetails.length} 
            <button onClick={props.showDetails}>
                {props.displayType === 'allProducts' ? 'Basket' : 'Shoes'}
            </button>
        </div>
    )
}

export default Cart;