<template>
  <div class="main">
    <TodoList :todoList="todoList" />
  </div>
</template>

<script>
import TodoList from '@/components/Main/TodoList'
export default {
  components: {
    TodoList
  },
  data() {
    return {
      todoList: []
    }
  },
  mounted() {
    this.todoList = JSON.parse(this.$localStorage.get('todoList'));
    // this.$localStorage.set('todoList', JSON.stringify([
    //   {
    //     title: 'Get up in the morning',
    //     complete: false
    //   },
    //   {
    //     title: 'Get up in the morning',
    //     complete: false
    //   },
    //   {
    //     title: 'Get up in the morning',
    //     complete: false
    //   }
    // ]))
  }
};
</script>

<style lang="scss" scoped>
</style>
