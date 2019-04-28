
const addToCart = productId => {
    return {
        type: 'ADD_TO_CART',
        productId: productId
    }
}

const removeFromCart = productId => {
    return {
        type: 'REMOVE_FROM_CART',
        productId: productId
    }
}

const updatedCart = (products, cart) => {
    return {
        type: 'UPDATED_CART',
        products: products,
        cart: cart
    }
}

const unsucessfullUpdatedCart = error => {
    return {
        type: 'UNSUCCESSFULL_UPDATED_CART',
        error: error
    }
}

export { addToCart, removeFromCart, updatedCart, unsucessfullUpdatedCart };