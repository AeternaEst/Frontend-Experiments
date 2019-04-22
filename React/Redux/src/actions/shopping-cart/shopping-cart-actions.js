
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

export { addToCart, removeFromCart };