<template>
    <div class="d-flex flex-wrap">
      <product-card/>
      <product-card/>
      <product-card/>
      <product-card/>
    </div>
  </template>

  <script>
  import ProductCard from './ProductCard.vue'
  export default {
    components: {
      ProductCard
    }
  }
  </script>
