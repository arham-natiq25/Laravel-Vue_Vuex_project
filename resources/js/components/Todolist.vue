<template>
    <div>
        <Todo v-for="(todo,index) in todoss" :key="index" :todo="todo" />
    </div>
</template>

<script>
import Todo from './Todo.vue'
import { mapState } from 'vuex';
export default {
    components: {
        Todo
    },
    computed:{
        // todos()
        // {
        //     return this.$store.state.todos
        // }
        // instead of this we also use

        ...mapState({
            todoss : 'todos'
        })
    }
}
</script>
