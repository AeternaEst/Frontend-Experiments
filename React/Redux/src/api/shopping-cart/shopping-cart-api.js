import ApiResponse from './shopping-cart-api-models';

export const products = [
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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Resolving products: " + this.products);
                resolve(this.products);
            }, 2000);
        });
    }

    getCart() {
        console.log("getCart api called");
        return this.cart;
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         console.log("Resolving cart: " + this.cart);
        //         resolve(this.cart);
        //     }, 2000);
        // });
    }

    addToCart(productId) {
        console.log("addToCart api called");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("adding to cart");
                const productToAdd = this.products.find(product => product.id === productId);
                console.log(`found product ${productToAdd}`);

                if (!productToAdd) {
                    console.log("Product dosen't exist");
                    reject(new ApiResponse(false, "Product dosen't exist"));
                }

                console.log("*****" + productToAdd.quantity);
                if (productToAdd && productToAdd.quantity < 1) {
                    console.log("Out of stock");
                    reject(new ApiResponse(false, "Out of stock"));
                }

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
                resolve(new ApiResponse(true, this.products));
            }, 2000);
        });
    }

    removeFromCart(productId) {
        console.log("removeFromCart api called");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("removing from cart");

                const productToRemove = this.products.find(product => product.id === productId);
                console.log(`found product ${productToRemove}`);

                const cartIndex = this.cart.findIndex(entity => entity.product.id === productId);
                console.log(`cartIndex to delete ${cartIndex}`);

                if (!productToRemove || cartIndex < 0) {
                    console.log("Product dosen't exist");
                    reject(new ApiResponse(false, "Product dosen't exist"));
                }

                const cartProduct = this.cart[cartIndex];
                productToRemove.quantity = productToRemove.quantity + 1;

                if (cartProduct.quantity === 1) {
                    this.cart.splice(cartIndex, 1);
                } else {
                    cartProduct.quantity = cartProduct.quantity - 1;
                }
                resolve(new ApiResponse(true, this.products));
            }, 2000);
        });
    }
}

const shoppingCartApi = new ShoppingCartApi();

export default shoppingCartApi;