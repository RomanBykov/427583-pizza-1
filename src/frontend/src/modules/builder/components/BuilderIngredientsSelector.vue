<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингридиенты</h2>

      <div class="sheet__content ingredients">
        <BuilderSauceSelector :sauces="sauces" @update-sauce="updateSauce" />

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <BuilderIngredientsItem
              v-for="ingredient in ingredients"
              :key="ingredient.type"
              :ingredient="ingredient"
              @update-ingredient-count="updateIngredientCount"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuilderIngredientsItem from "./BuilderIngredientsItem";
import BuilderSauceSelector from "./BuilderSauceSelector";

export default {
  components: {
    BuilderIngredientsItem,
    BuilderSauceSelector,
  },
  props: {
    sauces: {
      type: Array,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateSauce(sauce) {
      this.$emit("update-sauce", sauce);
    },
    updateIngredientCount(ingredient) {
      this.$emit("update-ingredient-count", ingredient);
    },
  },
};
</script>
