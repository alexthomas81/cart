import React from 'react';
import './allStyles.css';

class Products extends React.Component {
    handleAddToCart = (e, item) => {
        const { addToCart } = this.props;
        addToCart(item);
    }
    render() {
        const { allProducts } = this.props;
        return (
            <div>
                All Shoes available here :-
                <div className="prodItem">
                    {allProducts.map((product, index) => (
                        <div className="prodItem" key={index}>
                            {product.name}<br/><br/>
                            <img src={product.path} alt={product.name} className="productImage" /><br/>
                            <div><button onClick={(e) => this.handleAddToCart(e, product)}>Add to Basket</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Products;