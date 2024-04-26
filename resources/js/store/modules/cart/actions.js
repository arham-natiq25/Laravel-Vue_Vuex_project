
import Cart from "../../../apis/Cart"

export const addProductToCart =  ({commit},{product,quantity})=>{

    commit('ADD_TO_CART',{product,quantity})

    Cart.store({
        product_id : product.id,
        quantity

    })
}

export const getCartItems = ({commit})=>{
    Cart.all().then(response=>{
        commit('SET_CART',response.data)
    })
}

export const removeProductFromCart = ({commit},product)=>{
    commit('REMOVE_PRODUCT_FROM_CART',product)

    Cart.delete(product.id);
    // axios.delete(`/api/cart/${product.id}`)
}

export const clearCartItems = ({commit})=>{
    commit('REMOVE_PRODUCTS_FROM_CART')

    Cart.deleteAll();
    // axios.delete(`/api/cart`)
}
