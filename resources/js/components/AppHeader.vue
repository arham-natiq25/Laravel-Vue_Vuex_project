<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Product</a>
            </li>
          </ul>
        </div>
        <div>
            <div class="dropdown open">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="triggerId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                  0  Cart
                </button>
                <div @click="$event.stopPropagation();
                ">
                    <minicart/>
                </div>
              </div>
          </div>

      </div>
    </nav>
  </template>

  <script>
  import Minicart from './MiniCart.vue';
  export default {
    components:{
        Minicart
    }

  }
  </script>

  <style scoped>
  /* Custom styles can go here */
  </style>
