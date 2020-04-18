<template>
  <li class="todo" v-if="todo">
    <div class="todo__complete">
      <CheckBox v-model="todo.complete" :disabled="edit ? false : true" :id="`todo-complete-${index}`" />
    </div>
    <div class="todo__wrap">
      <div class="todo__edit-title" v-if="edit" :ref="`edit-${index}`">
        <TextBox v-model="todo.title" :id="`textbox-${index}`" :index="index" />
      </div>
      <div class="todo__title"  v-else>
        <span v-if="todo.title">{{ todo.title }}</span>
        <span v-else>Unnamed title</span>
      </div>
      <div class="todo__options">
        <div class="todo__edit">
          <Button v-if="edit" theme="blue" :isMobile="true" @click="saveTodo">Save</Button>
          <Button v-else theme="green" :isMobile="true" @click="editMode">Edit</Button>
        </div>
        <div class="todo__remove" v-if="edit">
          <Button theme="red" :isMobile="true" @click="removeTodo">Remove</Button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import Button from "@/components/base/Button";
import CheckBox from "@/components/base/CheckBox";
import TextBox from "@/components/base/TextBox";

export default {
  props: {
    todo: {
      type: Object,
      default: null
    },
    index: {
      type: Number
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Button,
    CheckBox,
    TextBox
  },
  data() {
    return {
    }
  },
  methods: {
    editMode() {
      this.$router.push({
        name: 'Edit',
        params: {
          id: this.index
        }
      })
    },
    saveTodo() {
      this.$emit('saveTodo', {
        index: this.index,
        todo: this.todo
      })
      this.$router.push({
        name: 'Main'
      })
    },
    removeTodo() {
      this.$emit('removeTodo', this.index)
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

  &:first-child {
    margin-top: 0;
  }

  &__complete {
    position: relative;
    flex-basis: 30px;
  }

  &__wrap {
    flex-grow: 1;
    min-height: 100px;
    padding: 20px;
  }

  &__title {
    font-size: 20px;
    min-height: 48px;
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
