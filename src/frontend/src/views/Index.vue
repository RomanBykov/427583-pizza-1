<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector
          :doughOptions="doughOptions"
          @update-dough="updateDough"
        />
        <BuilderSizeSelector :sizes="sizes" @update-size="updateSize" />
        <BuilderIngredientsSelector
          :sauces="sauces"
          :ingredients="ingredients"
          @update-sauce="updateSauce"
          @update-ingredient-count="updateIngredientCount"
        />
        <BuilderPizzaView
          :pizza="pizza"
          :price="price"
          @update-name="updateName"
          @update-ingredient-count="updateIngredientCount"
          @make-pizza="makePizza"
        />
      </div>
    </form>
  </main>
</template>

<script>
import pizza from "@/static/pizza.json";
import {
  normalizePizzaDough,
  normalizePizzaSizes,
  normalizePizzaSauces,
  normalizePizzaIngredients,
} from "@/common/utils";
import { PIZZA_DEFAULT } from "@/common/constants";

import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";

export default {
  name: "AppIndex",
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
  },
  computed: {
    doughPrice() {
      return this.getPizzaParamByType(this.doughOptions, "dough", "price");
    },
    saucePrice() {
      return this.getPizzaParamByType(this.sauces, "sauce", "price");
    },
    multiplier() {
      return this.getPizzaParamByType(this.sizes, "size", "multiplier");
    },
    ingredientsPrice() {
      return this.pizza.ingredients.reduce((totalCost, ingredient) => {
        const price = this.ingredients.find(
          (item) => item.type === ingredient.type
        ).price;

        return (totalCost += price * ingredient.count);
      }, 0);
    },
    totalPrice() {
      return (
        (this.doughPrice + this.saucePrice + this.ingredientsPrice) *
        this.multiplier
      );
    },
  },
  data() {
    return {
      doughOptions: normalizePizzaDough(pizza.dough),
      sizes: normalizePizzaSizes(pizza.sizes),
      sauces: normalizePizzaSauces(pizza.sauces),
      ingredients: normalizePizzaIngredients(pizza.ingredients),
      pizza: Object.assign({}, PIZZA_DEFAULT),
      price: 0,
      isReadyForSend: false,
    };
  },
  watch: {
    pizza: {
      deep: true,
      handler() {
        this.price = this.totalPrice;
      },
    },
  },
  methods: {
    getPizzaParamByType(pizzaParts, partsType, paramName) {
      return pizzaParts.find((item) => item.type === this.pizza[partsType])[
        paramName
      ];
    },
    updateDough(dough) {
      this.pizza.dough = dough;
    },
    updateSauce(sauce) {
      this.pizza.sauce = sauce;
    },
    updateSize(size) {
      this.pizza.size = size;
    },
    updateName(name) {
      this.pizza.name = name;
    },
    updateIngredientCount(ingredient) {
      this.pizza.ingredients = this.pizza.ingredients.filter(
        (item) => item.type !== ingredient.type
      );

      if (ingredient.count === 0) {
        return;
      }

      this.pizza.ingredients.push({
        type: ingredient.type,
        count: ingredient.count,
      });
    },
    makePizza() {
      console.log("Начнём готовить, когда появится axios!");
    },
  },
};
</script>
