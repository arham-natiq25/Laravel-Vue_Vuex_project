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

                <a href="#" class="btn btn-sm btn-secondary" @click.prevent="removeProductFromCart(item.product)">remove</a>
            </div>

        </div>
        <hr>
    </div>
        <div class="d-flex justify-content-between px-2">
            <span>Total : $ {{ cartTotalPrice }}</span>
            <a href="#" @click.prevent="clearCartItems()">Clear</a>

        </div>
    </div>
</template>

<script>
import { mapGetters,mapState,mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({
            cart : state=>state.cart.cart
        }),
        ...mapGetters({
            cartTotalPrice :'cart/cartTotalPrice'
        })

        // ...mapGetters('cart',['cartTotalPrice'])
        // cart()
        // {
        //     return  this.$store.state.cart
        // },
        //  cartTotal(){
        //     return this.$store.getters.cartTotalPrice;
        // }


    },
    mounted() {

        // this.$store.dispatch('getCartItems')
        this.getCartItems();
    },
    methods: {
        // ...mapActions('cart',['removeProductFromCart','clearCartItems','getCartItems']),
        ...mapActions({
            removeProductFromCart : 'cart/removeProductFromCart',
            clearCartItems :'cart/clearCartItems',
            getCartItems : 'cart/getCartItems'
        })
        // removeProductFromCart(product)
        // {
        //     this.$store.dispatch('removeProductFromCart',product);
        // },
        // clearCartItems()
        // {
        //     this.$store.dispatch('clearCartItems');
        // }
    },
}
</script>
