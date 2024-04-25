<template>
    <div class="container mt-5" v-if="product">
     <div class="row">
        <div class="col-4">
            <img :src="product.image" class="w-100" alt="" />
        </div>
        <div class="col-8">
            <h1>{{ product.title }}</h1>
            <h3>${{product.price}}</h3>
            <input type="text" class="text-center col-1 me-2 p-1">
            <button class="btn btn-primary">Add to cart</button>

            <p class="mt-4">{{ product.description }}</p>
        </div>
     </div>
    </div>
</template>

<script>
export default {
    props:['id'],
    computed:{
        product()
        {
            return this.$store.state.product;
        }
    },
    mounted() {
        this.$store.dispatch('getProduct',this.id);
    },
}
</script>
