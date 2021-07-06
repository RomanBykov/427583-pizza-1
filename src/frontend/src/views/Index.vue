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
                v-for="type in pizza.dough"
                :key="type.name"
                :class="`dough__input--${pizzaType[type.name]}`"
              >
                <input
                  type="radio"
                  name="dought"
                  :value="pizzaType[type.name]"
                  class="visually-hidden"
                  checked
                />
                <b>{{ type.name }}</b>
                <span>{{ type.description }}</span>
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
                v-for="size in pizza.sizes"
                :key="size.name"
                :class="`diameter__input--${pizzaSize[size.name]}`"
              >
                <input
                  type="radio"
                  name="diameter"
                  :value="pizzaSize[size.name]"
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
                  v-for="sauce in pizza.sauces"
                  :key="sauce.name"
                >
                  <input
                    type="radio"
                    name="sauce"
                    checked
                    :value="pizzaSauces[sauce.name]"
                  />
                  <span>{{ sauce.name }}</span>
                </label>
              </div>

              <div class="ingridients__filling">
                <p>Начинка:</p>

                <ul class="ingridients__list">
                  <li
                    class="ingridients__item"
                    v-for="ingredientsItem in pizza.ingredients"
                    :key="ingredientsItem.name"
                  >
                    <span
                      class="filling"
                      :class="`filling--${
                        pizzaIngredients[ingredientsItem.name]
                      }`"
                      >{{ ingredientsItem.name }}</span
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
import pizza from "../static/pizza.json";
import {
  pizzaType,
  pizzaSize,
  pizzaSauces,
  pizzaIngredients,
} from "@/common/constants";

export default {
  data() {
    return {
      pizza,
      pizzaType,
      pizzaSize,
      pizzaSauces,
      pizzaIngredients,
    };
  },
};
</script>

<style></style>
