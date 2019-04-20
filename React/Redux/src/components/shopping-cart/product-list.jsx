import React from 'react';

const ProductList = props => {
    console.log(props);
    const { products, addProduct } = props;
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product">
                    <h4>{product.name}</h4>
                    <p>{product.id}</p>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                    <button onClick={() => addProduct(product.id)}>Click</button>
                </div>
            ))}
        </div>
    )
}

export default ProductList;