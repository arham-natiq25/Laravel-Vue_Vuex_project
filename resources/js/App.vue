<template>
    <div>
        <app-header/>
        <router-view></router-view>
    </div>
    <notifications-list/>
</template>
<script>
import AppHeader from './components/AppHeader.vue';
import NotificationsList from './components/NotificationsList.vue'
export default {
components:{
    AppHeader,
    NotificationsList

}

}
</script>
