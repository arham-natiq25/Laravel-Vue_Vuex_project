<template>
    <div class="dropdown-menu" style="min-width: 320px;right:0;left: auto;" aria-labelledby="triggerId">
      <div v-for="item in cart" :key="item.id">
        <div class="px-2 d-flex justify-content-between">
            <div>
                <strong>{{ item.product.title }}</strong>
                <br>
                {{item.quantity}} x  ${{ item.product.price}}
            </div>
            <div>

                <a href="#" class="btn btn-sm btn-secondary">remove</a>
            </div>

        </div>
        <hr>
    </div>
        <div class="d-flex justify-content-between px-2">
            <span>Total : $ {{ cartTotal }}</span>
            <a href="#">Clear</a>

        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cart()
        {
            return  this.$store.state.cart
        },
         cartTotal(){
            return this.$store.getters.cartTotalPrice;
        }
    },
    mounted() {
        this.$store.dispatch('getCartItems')
    },
}
</script>
