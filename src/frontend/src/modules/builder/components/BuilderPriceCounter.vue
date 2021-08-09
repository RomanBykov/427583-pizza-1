<template>
  <div class="content__result">
    <p>Итого: {{ price }} ₽</p>
    <button
      type="button"
      class="button"
      :class="{ 'button--disabled': !isReady }"
      :diabled="!isReady"
      @click="makePizza"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    price: {
      type: Number,
      required: true,
    },
    hasIngredients: {
      type: Boolean,
      required: true,
    },
    hasName: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    isReady() {
      return this.hasIngredients && this.hasName;
    },
  },
  methods: {
    makePizza() {
      if (this.isReady) {
        this.$emit("make-pizza");
      }
    },
  },
};
</script>
