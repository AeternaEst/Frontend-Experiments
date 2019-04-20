
const addToCart = productId => {
    return {
        type: 'ADD_TO_CART',
        productid: productId
    }
}

const removeFromCart = productId => {
    return {
        type: 'REMOE_FROM_CART',
        productid: productId
    }
}

export { addToCart, removeFromCart };