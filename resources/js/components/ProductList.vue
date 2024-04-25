<template>
    <div class="d-flex flex-wrap">
      <product-card v-for="product in products" :key="product.id" :product="product"/>

    </div>
  </template>

  <script>
  import ProductCard from './ProductCard.vue'
  export default {
    components: {
      ProductCard
    },

    computed: {
        products()
        {
            return this.$store.state.products
        }
    },

    mounted() {
        this.$store.dispatch('getProducts');
    },
  }
  </script>
