<template>
  <li class="ingredients__item">
    <AppDrag
      :isDraggable="isDraggable"
      :transferData="{ type: ingredient.type, count: count }"
    >
      <span class="filling" :class="`filling--${ingredient.type}`">{{
        ingredient.name
      }}</span>
    </AppDrag>

    <ItemCounter
      :classes="'ingredients__counter'"
      :max="maxCount"
      @update-count="updateCount"
    />
  </li>
</template>

<script>
import AppDrag from "@/common/components/AppDrag";
import ItemCounter from "@/common/components/ItemCounter";

const IngredientCount = {
  MIN: 0,
  MAX: 3,
};

export default {
  name: "BuilderIngredientsItem",
  components: {
    AppDrag,
    ItemCounter,
  },
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isDraggable() {
      return (
        this.count > IngredientCount.MIN && this.count <= IngredientCount.MAX
      );
    },
  },
  data() {
    return {
      count: 0,
      maxCount: IngredientCount.MAX,
    };
  },
  methods: {
    updateCount(count) {
      this.count = count;

      this.$emit("update-ingredient-count", {
        type: this.ingredient.type,
        count: this.count,
      });
    },
  },
};
</script>
