import API from "./Api";

export default {
    all()
    {
       return API.get('products')
    },
    show(id)
    {
        return API.get(`products/${id}`)
    }
}
