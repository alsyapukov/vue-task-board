<template>
  <div class="todo-list">
    <div>
      <ul class="todo-list__list" v-if="todoList && todoList.length">
        <Todo
          v-for="(todo, i) in todoList"
          :key="i"
          :todo="todo"
          :index="i"
        />
      </ul>
      <div v-else class="todo-list__empty">
        <p>You don't have any ToDo yet!</p>
        <p>Please, create a ToDo :)</p>
      </div>
    </div>
    <div class="todo-list__options">
      <div class="todo-list__add-todo">
        <Button theme="blue" :isMobile="true" @click="addTodo">Add todo</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Main/TodoList/Todo";
import Button from "@/components/base/Button";

const simpleTodo = {
  title: "",
  complete: false
};

export default {
  components: {
    Todo,
    Button
  },
  data() {
    return {
      todoList: [],
      noSortList: []
    };
  },
  mounted() {
    this.todoList = JSON.parse(this.$localStorage.get("todoList"));
    if(!this.todoList) {
      this.todoList = []
    }
    this.noSortList = [...this.noSortList, ...this.todoList];

    if(this.todoList.length > 0)
      this.sortTodoList();
  },
  methods: {
    addToLocalStorage() {
      this.$localStorage.set("todoList", JSON.stringify(this.todoList));
    },
    sortTodoList() {
      this.todoList.sort((prev, next) => {
        return prev.title < next.title 
          ? -1 
          : prev.title > next.title 
            ? 1 
            : 0;
      }).reverse();
      this.addToLocalStorage();
    },
    addTodo() {
      this.todoList.push(simpleTodo);
      this.addToLocalStorage();
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-list {
  &__list {
    display: flex;
    flex-direction: column;
  }
  &__empty {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 22px;
    line-height: 36px;
  }
  &__options {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
}
</style>
