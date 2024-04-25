<template>
    <div class="container mt-5">
     <div class="row">
        <div class="col-4">
            <img src="https://via.placeholder.com/150x100" class="w-100" alt="" />
        </div>
        <div class="col-8">
            <h1>Product title</h1>
            <h3>$34</h3>
            <input type="text" class="text-center col-1 me-2 p-1">
            <button class="btn btn-primary">Add to cart</button>

            <p class="mt-4">Lorem ipsum dolor sit amet.</p>
        </div>
     </div>
    </div>
</template>

<script>
export default {
    props:['id']
}
</script>
