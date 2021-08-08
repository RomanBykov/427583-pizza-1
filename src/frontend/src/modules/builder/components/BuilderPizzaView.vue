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
      <AppDrop @drop="moveIngredient">
        <div :class="`pizza pizza--foundation--${dough}-${pizza.sauce}`">
          <div class="pizza__wrapper">
            <div
              class="pizza__filling"
              v-for="(filling, idx) in fillings"
              :key="idx"
              :class="filling"
            ></div>
          </div>
        </div>
      </AppDrop>
    </div>

    <BuilderPriceCounter
      :price="price"
      :hasName="hasName"
      :hasIngredients="hasIngredients"
      @make-pizza="makePizza"
    />
  </div>
</template>

<script>
import { PIZZA_DEFAULT } from "@/common/constants";
import BuilderPriceCounter from "./BuilderPriceCounter";
import AppDrop from "@/common/components/AppDrop";

const DoughType = {
  LIGHT: "small",
  LARGE: "big",
};

const FillingModificator = {
  1: "",
  2: " pizza__filling--second",
  3: " pizza__filling--third",
};

export default {
  name: "BuilderPizzaView",
  components: {
    BuilderPriceCounter,
    AppDrop,
  },
  props: {
    pizza: {
      type: Object,
      default: PIZZA_DEFAULT,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  computed: {
    dough() {
      return DoughType[this.pizza.dough.toUpperCase()];
    },
    fillings() {
      const fillingsClasses = [];

      this.pizza.ingredients.forEach((ingredient) => {
        fillingsClasses.push(
          `pizza__filling--${ingredient.type}${
            FillingModificator[ingredient.count]
          }`
        );
      });

      return fillingsClasses;
    },
    hasName() {
      return !!this.pizzaName;
    },
    hasIngredients() {
      return this.pizza.ingredients.length > 0;
    },
  },
  data() {
    return {
      pizzaName: "",
    };
  },
  methods: {
    updateName() {
      this.$emit("update-name", this.pizzaName);
    },
    moveIngredient(ingredient) {
      this.$emit("update-ingredient-count", ingredient);
    },
    makePizza() {
      this.$emit("make-pizza");
    },
  },
};
</script>
