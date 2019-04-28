import React from 'react';
import ProductDetails from './product-details';

const ProductList = props => {
    const { products, addProduct, isLoading, addProductLabel } = props;
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductDetails key={product.id} product={product} addProduct={addProduct} isLoading={isLoading} addProductLabel={addProductLabel} />
            ))}
        </div>
    )
}

export default ProductList;