<template>
  <input
    type="radio"
    :name="name"
    :value="value"
    :checked="isChecked"
    @change="$emit('update', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    checked: {
      type: String,
      default: "",
    },
  },
  computed: {
    isChecked() {
      return this.value === this.checked;
    },
  },
};
</script>
