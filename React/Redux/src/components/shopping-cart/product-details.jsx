import React from 'react';
import Loader from './loader';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
        this.addProductWithLoadingState = this.addProductWithLoadingState.bind(this);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate ProductDetails " + this.state.isLoading + " : " + this.props.isLoading);
        if(this.state.isLoading && !this.props.isLoading) {
            console.log("setting isLoading back to false");
            this.setState({
                isLoading: false
            });
        }
    }

    addProductWithLoadingState(productId, addProduct) {
        this.setState({
            isLoading: true
        });
        addProduct(productId);
    }

    render() {
        const product = this.props.product;
        const addProduct = this.props.addProduct;
        const addLabel = this.props.addProductLabel;

        if (this.state.isLoading) {
            return <Loader loaderMessage="Loading"/>;
        }

        return (
            <div className="product">
                <h4>{product.name}</h4>
                <p>{product.id}</p>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
                <button onClick={() => this.addProductWithLoadingState(product.id, addProduct)}>{addLabel}</button>
            </div>
        )
    }
}

export default ProductDetails;