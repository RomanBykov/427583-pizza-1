<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          class="dough__input"
          v-for="dough in doughOptions"
          :key="dough.type"
          :class="`dough__input--${dough.type}`"
        >
          <RadioButton
            class="visually-hidden"
            :name="'dough'"
            :value="dough.type"
            :checked="defaultDough"
            @update="updateDough"
          />

          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
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
    doughOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      defaultDough: PIZZA_DEFAULT.dough,
    };
  },
  methods: {
    updateDough(selected) {
      this.$emit("updateDough", selected);
    },
  },
};
</script>
