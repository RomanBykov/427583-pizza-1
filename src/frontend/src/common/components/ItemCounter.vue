<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :class="{ 'counter__button--disabled': count === 0 }"
      @click="decrease"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      v-model="count"
      @change="updateCount"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :class="{ 'counter__button--disabled': count === 3 }"
      @click="increase"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    decrease() {
      if (this.count === 0) {
        return;
      }

      this.count--;
      this.updateCount();
    },
    increase() {
      if (this.count === 3) {
        return;
      }

      this.count++;
      this.updateCount();
    },
    updateCount() {
      this.$emit("update-count", this.count);
    },
  },
};
</script>
