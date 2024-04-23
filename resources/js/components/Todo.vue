<template>
    <div>
      <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
      <button @click="deleteTodo">Delete</button>
    </div>
  </template>

  <script>
  export default {
    props: ["todo"],
    methods: {
      deleteTodo() {
        this.$store.dispatch("deleteTodo", this.todo);
      },
    },
  };
  </script>

  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>
