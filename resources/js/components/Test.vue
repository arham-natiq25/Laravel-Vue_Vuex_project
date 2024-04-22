<template>
    <div>
        Test SPA
    </div>
    <h3>Todo</h3>
    <todolist/>
    <todoform/>
</template>

<script>
import Todolist from './Todolist.vue';
import Todoform from './TodoForm.vue';
export default {
  components: { Todolist ,Todoform},

    name:'test',

}
</script>
