<template>
  <div class="counter counter--orange" :class="classes">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :class="{ 'counter__button--disabled': isMin }"
      :disabled="isMin"
      @click="decrease"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      v-model="count"
      @keypress="testKey($event)"
      @blur="resetIfEmpty"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :class="{ 'counter__button--disabled': isMax }"
      :disabled="isMax"
      @click="increase"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
const DigitKey = {
  NUMBER_ZERO: 48,
  NUMBER_NINE: 57,
};

export default {
  name: "ItemCounter",
  props: {
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: 0,
    },
    classes: {
      type: String,
      default: "",
    },
  },
  computed: {
    isMin() {
      return this.count <= this.min;
    },
    isMax() {
      return this.count >= this.max;
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count() {
      this.updateCount();
    },
  },
  methods: {
    testKey($event) {
      let keyCode = $event.keyCode;

      if (keyCode < DigitKey.NUMBER_ZERO || keyCode > DigitKey.NUMBER_NINE) {
        return $event.preventDefault();
      }

      this.count = null;
    },
    resetIfEmpty() {
      if (!this.count) {
        this.count = this.min;
      }
    },
    decrease() {
      if (!this.isMin) {
        this.count--;
      }
    },
    increase() {
      if (!this.isMax) {
        this.count++;
      }
    },
    updateCount() {
      if (this.count !== null) {
        if (this.count > this.max) {
          this.count = this.max;
        }

        this.$emit("update-count", this.count);
      }
    },
  },
};
</script>
