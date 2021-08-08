export const PIZZA_DOUGH_OPTIONS = [
  {
    name: "Тонкое",
    value: "light",
  },
  {
    name: "Толстое",
    value: "large",
  },
];

export const DoughType = {
  LIGHT: "small",
  LARGE: "big",
};

export const PIZZA_SIZES = [
  {
    name: "23 см",
    value: "small",
  },
  {
    name: "32 см",
    value: "normal",
  },
  {
    name: "45 см",
    value: "big",
  },
];

export const PIZZA_SAUCES = [
  {
    name: "Томатный",
    value: "tomato",
  },
  {
    name: "Сливочный",
    value: "creamy",
  },
];

export const PIZZA_INGREDIENTS = [
  {
    name: "Грибы",
    value: "mushrooms",
  },
  {
    name: "Чеддер",
    value: "cheddar",
  },
  {
    name: "Салями",
    value: "salami",
  },
  {
    name: "Ветчина",
    value: "ham",
  },
  {
    name: "Ананас",
    value: "ananas",
  },
  {
    name: "Бекон",
    value: "bacon",
  },
  {
    name: "Лук",
    value: "onion",
  },
  {
    name: "Чили",
    value: "chile",
  },
  {
    name: "Халапеньо",
    value: "jalapeno",
  },
  {
    name: "Маслины",
    value: "olives",
  },
  {
    name: "Томаты",
    value: "tomatoes",
  },
  {
    name: "Лосось",
    value: "salmon",
  },
  {
    name: "Моцарелла",
    value: "mozzarella",
  },
  {
    name: "Пармезан",
    value: "parmesan",
  },
  {
    name: "Блю чиз",
    value: "blue_cheese",
  },
];

export const PIZZA_DEFAULT = {
  dough: "light",
  sauce: "tomato",
  size: "normal",
  name: "",
  ingredients: [],
};

export const DATA_TRANSFER_PAYLOAD = "payload";

export const MOVE = "move";

/* eslint-disable */
export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
/* eslint-enable */
