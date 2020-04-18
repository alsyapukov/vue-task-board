<template>
  <div class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      v-model="isChecked"
      :value="isChecked"
      :name="id"
      :id="id"
      :disabled="disabled"
      @change="valueChange(isChecked)"
    />
    <label :for="id" class="checkbox__view" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "checkbox"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isChecked: false
    };
  },
  mounted() {
    if (this.$attrs.value) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  },
  methods: {
    valueChange(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  width: 100%;
  height: 100%;

  &__input {
    display: none;
    &:not(disabled),
    &:checked + .checkbox__view {
      background-color: #0fc766;
    }
  }

  &__view {
    display: block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: #ff2842;
  }
}
</style>
