<template>
    <div class="container mt-5" v-if="product">
     <div class="row">
        <div class="col-4">
            <img :src="product.image" class="w-100" alt="" />
        </div>
        <div class="col-8">
            <h1>{{ product.title }}</h1>
            <h3>${{product.price}}</h3>
            <input type="text" v-model.number="quantity" class="text-center col-1 me-2 p-1">
            <button class="btn btn-primary" @click="addToCart()">Add to cart</button>

            <p class="mt-4">{{ product.description }}</p>
        </div>
     </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    props:['id'],
    data() {
        return {
            quantity : 1
        }
    },
    computed:{
        ...mapState({
            product : state=> state.product.product
        }),
        // product()
        // {
        //     return this.$store.state.product;
        // }
    },
    mounted() {
        // this.$store.dispatch('getProduct',this.id);
        this.getProduct(this.id)
    },
    methods: {
        ...mapActions('product',['getProduct']),
        ...mapActions('cart',['addProductToCart']),
        addToCart(){
            this.addProductToCart({
                product : this.product,
                quantity : this.quantity
            })

        }
    },
}
</script>
