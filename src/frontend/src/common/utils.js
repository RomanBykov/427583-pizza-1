import {
  PIZZA_DOUGH_OPTIONS,
  PIZZA_SIZES,
  PIZZA_SAUCES,
  PIZZA_INGREDIENTS,
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

export const normalizePizzaDough = (pizzaPart) => {
  return normalizePizzaPart(pizzaPart, PIZZA_DOUGH_OPTIONS);
};

export const normalizePizzaSizes = (pizzaPart) => {
  return normalizePizzaPart(pizzaPart, PIZZA_SIZES);
};

export const normalizePizzaSauces = (pizzaPart) => {
  return normalizePizzaPart(pizzaPart, PIZZA_SAUCES);
};

export const normalizePizzaIngredients = (pizzaPart) => {
  return normalizePizzaPart(pizzaPart, PIZZA_INGREDIENTS);
};
