<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

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
                <input
                  type="radio"
                  name="dought"
                  :value="dough.name"
                  class="visually-hidden"
                  checked
                />
                <b>{{ dough.name }}</b>
                <span>{{ dough.description }}</span>
              </label>
            </div>
          </div>
        </div>

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
                <input
                  type="radio"
                  name="diameter"
                  :value="size.type"
                  class="visually-hidden"
                />
                <span>{{ size.name }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingridients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингридиенты
            </h2>

            <div class="sheet__content ingridients">
              <div class="ingridients__sauce">
                <p>Основной соус:</p>

                <label
                  class="radio ingridients__input"
                  v-for="sauce in sauces"
                  :key="sauce.type"
                >
                  <input
                    type="radio"
                    name="sauce"
                    checked
                    :value="sauce.type"
                  />
                  <span>{{ sauce.name }}</span>
                </label>
              </div>

              <div class="ingridients__filling">
                <p>Начинка:</p>

                <ul class="ingridients__list">
                  <li
                    class="ingridients__item"
                    v-for="ingredient in ingredients"
                    :key="ingredient.type"
                  >
                    <span
                      class="filling"
                      :class="`filling--${ingredient.type}`"
                      >{{ ingredient.name }}</span
                    >

                    <div class="counter counter--orange ingridients__counter">
                      <button
                        type="button"
                        class="
                          counter__button
                          counter__button--disabled
                          counter__button--minus
                        "
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        value="0"
                      />
                      <button
                        type="button"
                        class="counter__button counter__button--plus"
                      >
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button button--disabled" disabled>
              Готовьте!
            </button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import pizza from "@/static/pizza.json";
import {
  PIZZA_DOUGH_OPTIONS,
  PIZZA_SIZES,
  PIZZA_SAUCES,
  PIZZA_INGREDIENTS,
} from "@/common/constants";
import { normalizePizzaPart } from "@/common/utils";

export default {
  data() {
    return {
      doughOptions: normalizePizzaPart(pizza.dough, PIZZA_DOUGH_OPTIONS),
      sizes: normalizePizzaPart(pizza.sizes, PIZZA_SIZES),
      sauces: normalizePizzaPart(pizza.sauces, PIZZA_SAUCES),
      ingredients: normalizePizzaPart(pizza.ingredients, PIZZA_INGREDIENTS),
    };
  },
};
</script>
