<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        v-model="pizzaName"
        @change="updateName"
      />
    </label>

    <div class="content__constructor">
      <div :class="`pizza pizza--foundation--${dough}-${pizza.sauce}`">
        <div class="pizza__wrapper">
          <div class="pizza__filling pizza__filling--ananas"></div>
          <div class="pizza__filling pizza__filling--bacon"></div>
          <div class="pizza__filling pizza__filling--cheddar"></div>
        </div>
      </div>
    </div>

    <BuilderPriceCounter />
  </div>
</template>

<script>
import { PIZZA_DEFAULT } from "@/common/constants";
import BuilderPriceCounter from "./BuilderPriceCounter.vue";

const DoughType = {
  LIGHT: "small",
  LARGE: "big",
};

export default {
  components: {
    BuilderPriceCounter,
  },
  props: {
    pizza: {
      type: Object,
      default: PIZZA_DEFAULT,
    },
  },
  computed: {
    dough() {
      return DoughType[this.pizza.dough.toUpperCase()];
    },
  },
  data() {
    return {
      pizzaName: "",
    };
  },
  methods: {
    updateName() {
      this.$emit("updateName", this.pizzaName);
    },
  },
};
</script>
