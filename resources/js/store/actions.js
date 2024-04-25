import axios from "axios"

export const getProducts = ({commit}) =>
{
    axios.get('/api/products').then(response =>{
        commit('SET_PRODUCTS',response.data)
    })
}
export const  getProduct = ({commit},productId)=>{
    axios.get(`/api/products/${productId}`).then(response=>{
        commit('SET_PRODUCT',response.data)
    })
}
