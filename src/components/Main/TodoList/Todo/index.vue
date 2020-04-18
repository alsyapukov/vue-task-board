<template>
  <li class="todo">
    <div class="todo__title">
      <span v-if="todo.title">{{ todo.title }}</span>
      <span v-else>Unnamed title</span>
    </div>
    <div class="todo__title">
      <span v-if="todo.title">{{ todo.title }}</span>
      <span v-else>Unnamed title</span>
    </div>
    <div class="todo__options">
      <div class="todo__edit">
        <Button theme="green" :isMobile="true" @click="editRoute">Edit</Button>
      </div>
      <div class="todo__remove">
        <Button theme="red" :isMobile="true" @click="modalRemove = !modalRemove">Remove</Button>
      </div>
    </div>
  </li>
</template>

<script>
import Button from '@/components/base/Button'
import CheckBox from '@/components/base/CheckBox'
export default {
  props: {
    todo: {
      type: Object,
      default: {}
    }
  },
  components: {
    Button,
    CheckBox
  }
};
</script>

<style lang="scss" scoped>
.todo {
  min-height: 100px;
  padding: 20px;
  background-color: #ececec;
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }
  
  &__title {
    font-size: 20px;
  }

  &__options {
    display: flex;
    margin-top: 20px;
  }
  &__remove {
    margin-left: 10px;
  }
}
@media screen and (max-width: 559px) {
  .todo {
    &__options {
      flex-direction: column;
    }
    &__remove {
      margin-left: 0;
      margin-top: 10px;
    }
  }
}
</style>
