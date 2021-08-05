<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector
          :doughOptions="doughOptions"
          @update-dough="updateDough"
        />
        <BuilderSizeSelector :sizes="sizes" @updateSize="updateSize" />
        <BuilderIngredientsSelector
          :sauces="sauces"
          :ingredients="ingredients"
          @update-sauce="updateSauce"
          @update-ingredient-count="updateIngredientCount"
        />
        <BuilderPizzaView
          :pizza="pizza"
          @update-name="updateName"
          @update-ingredient-count="updateIngredientCount"
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
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
  },
  data() {
    return {
      doughOptions: normalizePizzaDough(pizza.dough),
      sizes: normalizePizzaSizes(pizza.sizes),
      sauces: normalizePizzaSauces(pizza.sauces),
      ingredients: normalizePizzaIngredients(pizza.ingredients),
      pizza: Object.assign({}, PIZZA_DEFAULT),
    };
  },
  methods: {
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

      this.pizza.ingredients.push({
        type: ingredient.type,
        count: ingredient.count,
      });
    },
  },
};
</script>
