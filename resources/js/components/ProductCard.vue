<template>
    <div class="product-card">
      <div class="card h-100 mx-2 mt-2">
        <img class="card-img-top" :src="product.image" alt="Title" />
        <div class="card-body">
          <h4 class="card-title">
            <router-link :to="{ name: 'product', params: { id: product.id } }">{{ product.title }}</router-link>
          </h4>
          <strong>${{ product.price }}</strong>
          <p class="card-text">{{ product.description }}</p>
        </div>
        <div class="px-1 pb-3">
          <button class="btn btn-secondary" @click="addToCart()">Add to cart</button>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    props : ['product'],
    methods: {
        addToCart(){
            this.$store.dispatch('addProductToCart',{
                    product : this.product,
                    quantity : 1
            })
        }
    },
  }
  </script>

  <style scoped>
  .product-card {
    flex: 0 0 calc(33.333% - 1rem); /* Adjust this value according to your needs */
    max-width: calc(33.333% - 1rem); /* Adjust this value according to your needs */
    margin-bottom: 1rem;
  }

  @media (max-width: 992px) {
    .product-card {
      flex: 0 0 calc(50% - 1rem); /* Adjust this value according to your needs */
      max-width: calc(50% - 1rem); /* Adjust this value according to your needs */
    }
  }

  @media (max-width: 576px) {
    .product-card {
      flex: 0 0 calc(100% - 1rem);
      max-width: calc(100% - 1rem);
    }
  }
  </style>
