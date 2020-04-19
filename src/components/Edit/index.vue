<template>
  <div class="edit" v-if="todo">
    <Todo :todo="todo" :edit="true" :index="id" @removeTodo="removeTodo" @saveTodo="saveTodo" />
  </div>
</template>

<script>
import Todo from "@/components/Main/TodoList/Todo";

export default {
  props: {
    id: {}
  },
  components: {
    Todo
  },
  data() {
    return {
      todo: null,
      todoList: []
    };
  },
  mounted() {
    this.todoList = JSON.parse(this.$localStorage.get("todoList"));
    if(!this.todoList) {
      this.todoList = []
    }

    this.todo = this.todoList[this.id];
  },
  methods: {
    addToLocalStorage() {
      this.$localStorage.set("todoList", JSON.stringify(this.todoList));
    },
    removeTodo(i) {
      this.$delete(this.todoList, i);
      this.addToLocalStorage();
      this.$router.push({
        name: 'Main'
      })
    },
    saveTodo(val) {
      this.$set(this.todoList, val.index, val.todo)
      this.addToLocalStorage();
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  align-items: stretch;
  margin-top: 20px;
  background-color: #ececec;
  border-radius: 6px;
  overflow: hidden;
  &__complete {
    position: relative;
    flex-basis: 30px;
  }
  &__wrap {
    flex-grow: 1;
    min-height: 100px;
    padding: 20px;
  }
}
</style>
