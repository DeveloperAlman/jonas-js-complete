// export module
const deliveryCost = 5;
const cart = [];

export const addToCart = function (product, quantity) {
    cart.push(product, quantity);

    let cartSentence = "";
    let quantitySentence = "";
    if (quantity > 1) {
        cartSentence = "were";
        quantitySentence = "s";
    } else {
        cartSentence = "was"
        quantitySentence = "";
    }

    console.log(`${quantity} ${product}${quantitySentence} ${cartSentence} added to the cart`)
}