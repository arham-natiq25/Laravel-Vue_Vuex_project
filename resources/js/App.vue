<template>
    <div>
        <app-header/>
        <router-view></router-view>
    </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
export default {
components:{
    AppHeader
}

}
</script>
