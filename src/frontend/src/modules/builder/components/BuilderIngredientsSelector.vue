<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингридиенты</h2>

      <div class="sheet__content ingredients">
        <BuilderSauceSelector :sauces="sauces" @updateSauce="updateSauce" />

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              class="ingredients__item"
              v-for="ingredient in ingredients"
              :key="ingredient.type"
            >
              <span class="filling" :class="`filling--${ingredient.type}`">{{
                ingredient.name
              }}</span>

              <ItemCounter @updateCount="updateCount" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter";
import BuilderSauceSelector from "./BuilderSauceSelector";

export default {
  components: {
    ItemCounter,
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
      this.$emit("updateSauce", sauce);
    },
    updateCount() {
      this.$emit("updateCount");
    },
  },
};
</script>
