<template>
  <input
    type="radio"
    :name="name"
    :value="value"
    v-model="selected"
    @change="update"
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
  data() {
    return {
      selected: false,
    };
  },
  mounted() {
    this.selected = this.checked;
  },
  methods: {
    update() {
      this.$emit("update", this.selected);
    },
  },
};
</script>
