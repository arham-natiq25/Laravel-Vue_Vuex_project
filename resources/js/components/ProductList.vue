<template>
    <div class="d-flex flex-wrap">
      <product-card v-for="product in products" :key="product.id" :product="product"/>

    </div>
  </template>

  <script>
  import { mapActions, mapState } from 'vuex';
import ProductCard from './ProductCard.vue'
  export default {
    components: {
      ProductCard
    },

    computed: {
        ...mapState({
            products : state=> state.product.products
        }),
        // products()
        // {
        //     return this.$store.state.products
        // }
    },

    mounted() {

        // this.$store.dispatch('getProducts');
        this.getProducts();
    },
    methods: {
        ...mapActions('product',['getProducts'])
    },
  }
  </script>
