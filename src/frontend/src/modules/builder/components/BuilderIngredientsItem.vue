<template>
  <li class="ingredients__item">
    <AppDrag :transferData="{ type: ingredient.type, count: count }">
      <span class="filling" :class="`filling--${ingredient.type}`">{{
        ingredient.name
      }}</span>
    </AppDrag>

    <ItemCounter @update-count="updateCount" />
  </li>
</template>

<script>
import AppDrag from "@/common/components/AppDrag";
import ItemCounter from "@/common/components/ItemCounter";

export default {
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
  data() {
    return {
      count: 0,
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
