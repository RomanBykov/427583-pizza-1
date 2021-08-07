<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          class="diameter__input"
          v-for="size in sizes"
          :key="size.type"
          :class="`diameter__input--${size.type}`"
        >
          <RadioButton
            class="visually-hidden"
            name="diameter"
            :value="size.type"
            :checked="defaultSize"
            @update="updateSize"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </div>
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
    sizes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      defaultSize: PIZZA_DEFAULT.size,
    };
  },
  methods: {
    updateSize(size) {
      this.$emit("update-size", size);
    },
  },
};
</script>
