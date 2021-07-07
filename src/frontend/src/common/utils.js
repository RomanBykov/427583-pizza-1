import { cloneDeep } from "lodash";
import {
  PIZZA_DOUGH_OPTIONS,
  PIZZA_SIZES,
  PIZZA_SAUCES,
  PIZZA_INGREDIENTS,
  PizzaPart,
} from "@/common/constants";

const composeItemWithType = (item, options) => {
  return {
    ...item,
    type: options.find((el) => el.name === item.name)?.value || "",
  };
};

const normalizePizzaPart = (pizzaPart, partOptions) => {
  return pizzaPart.map((item) => composeItemWithType(item, partOptions));
};

const normalizePizzaDough = (pizzaPart) => {
  return normalizePizzaPart(pizzaPart, PIZZA_DOUGH_OPTIONS);
};

const normalizePizzaSizes = (pizzaPart) => {
  return normalizePizzaPart(pizzaPart, PIZZA_SIZES);
};

const normalizePizzaSauces = (pizzaPart) => {
  return normalizePizzaPart(pizzaPart, PIZZA_SAUCES);
};

const normalizePizzaIngredients = (pizzaPart) => {
  return normalizePizzaPart(pizzaPart, PIZZA_INGREDIENTS);
};

const composePizzaMap = {
  [PizzaPart.DOUGH]: (item) => normalizePizzaDough(item),
  [PizzaPart.INGREDIENTS]: (item) => normalizePizzaIngredients(item),
  [PizzaPart.SAUCES]: (item) => normalizePizzaSauces(item),
  [PizzaPart.SIZES]: (item) => normalizePizzaSizes(item),
};

export const normalizePizza = (pizza) => {
  const pizzaCopy = cloneDeep(pizza);

  for (let key of Object.keys(pizzaCopy)) {
    pizzaCopy[key] = composePizzaMap[key](pizzaCopy[key]);
  }

  return pizzaCopy;
};
