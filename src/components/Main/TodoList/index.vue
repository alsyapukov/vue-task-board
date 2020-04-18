<template>
  <ul class="todo-list" v-if="todoList">
    <Todo v-for="(todo, i) in todoList" :key="i" :todo="todo" :index="i" />
  </ul>
  <div v-else class="todo-list__empty">
    <p>You don't have any ToDo yet!</p>
    <p>Please, create a ToDo :)</p>
  </div>
</template>

<script>
import Todo from '@/components/Main/TodoList/Todo'
export default {
  props: {
    todoList: {
      type: Array,
      default: []
    }
  },
  components: {
    Todo
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  &__empty {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 22px;
    line-height: 36px;
  }
}
</style>
