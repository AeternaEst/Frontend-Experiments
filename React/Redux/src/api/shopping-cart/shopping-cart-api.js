const products = [
    {
        id: 'product1',
        name: 'Garden Hose',
        price: 400,
        quantity: 3
    },
    {
        id: 'product2',
        name: 'Lawn Mower',
        price: 2000,
        quantity: 1
    },
    {
        id: 'product3',
        name: 'Grass seeds',
        price: 40,
        quantity: 0
    },
    {
        id: 'product4',
        name: 'Screw Driver',
        price: 100,
        quantity: 4
    },
]

class ShoppingCartApi {
    constructor() {
        this.products = products;
        this.cart = [];
    }

    getProducts() {
        console.log("getProducts api called");
        console.log(this.products);
        return this.products;
    }

    getCart() {
        console.log("getCart api called");
        return this.cart;
    }

    addToCart(productId) {
        console.log("addToCart api called");
        console.log("adding to cart");
        const productToAdd = this.products.find(product => product.id === productId);
        console.log(`found product ${productToAdd}`);

        if (!productToAdd)
            return this.products;

        const productAlreadyinCart = this.cart.find(entity => entity.product.id === productId);
        console.log(`product already in cart ${productAlreadyinCart}`);
        productToAdd.quantity = productToAdd.quantity - 1;

        if (!productAlreadyinCart) {
            this.cart.push({
                product: productToAdd,
                quantity: 1
            });
        } else {
            productAlreadyinCart.quantity = productAlreadyinCart.quantity + 1;
        }
        return this.products;
    }

    removeFromCart(productId) {
        console.log("removeFromCart api called");
        console.log("removing from cart");
        const productToRemove = this.products.find(product => product.id === productId);
        console.log(`found product ${productToRemove}`);
        const cartIndex = this.cart.findIndex(entity => entity.product.id === productId);
        console.log(`cartIndex to delete ${cartIndex}`);

        if (!productToRemove || cartIndex < 0)
            return this.products;

        const cartProduct = this.cart[cartIndex];
        productToRemove.quantity = productToRemove.quantity + 1;

        if (cartProduct.quantity === 1) {
            this.cart.splice(cartIndex, 1);
        } else {
            cartProduct.quantity = cartProduct.quantity - 1;
        }
        return this.products;
    }
}

const shoppingCartApi = new ShoppingCartApi();

export default shoppingCartApi;