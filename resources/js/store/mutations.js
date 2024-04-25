export const SET_PRODUCTS = (state,product)=>{
    state.products = product;
}
export const SET_PRODUCT = (state,product)=>{
    state.product = product;
}
export const ADD_TO_CART = (state,{product,quantity})=>{
    let productInCart = state.cart.find(item=>{
        return item.product.id === product.id
    })

    if(productInCart)
    {
        productInCart.quantity+= quantity;
        return;
    }
    state.cart.push({
        product,
        quantity
    });
}
export const SET_CART = (state,cartItems)=>{
    state.cart = cartItems
}
