<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>

    <label
      class="radio ingredients__input"
      v-for="sauce in sauces"
      :key="sauce.type"
    >
      <RadioButton
        :name="'sauce'"
        :value="sauce.type"
        :checked="defaultSauce"
        @update="updateSauce"
      />
      <span>{{ sauce.name }}</span>
    </label>
  </div>
</template>

<script>
import { PIZZA_DEFAULT } from "@/common/constants";
import RadioButton from "@/common/components/RadioButton";

export default {
  components: {
    RadioButton,
  },
  props: {
    sauces: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      defaultSauce: PIZZA_DEFAULT.sauce,
    };
  },
  methods: {
    updateSauce(sauce) {
      this.$emit("updateSauce", sauce);
    },
  },
};
</script>
