<template>

    <h3>Todo</h3>
    <h5>Completed {{completedTodos }}</h5>
    <h5>Pending {{ pendingTodos  }}</h5>
    <todolist/>
    <todoform/>
</template>

<script>
import Todolist from './Todolist.vue';
import Todoform from './TodoForm.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Todolist ,Todoform},

    name:'test',

    computed: {
        ...mapGetters({
            completedTodos : "completedTodos",
            pendingTodos : "pendingTodos"

        })
        // completedTodos() {
        //     return this.$store.getters.completedTodos;
        // },
        // pendingTodos() {
        //     return this.$store.getters.pendingTodos;
        // }
    },

}
</script>
