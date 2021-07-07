const composeItemWithType = (item, options) => {
  return {
    ...item,
    type: options.find((el) => el.name === item.name)?.value || "",
  };
};

export const normalizePizzaPart = (pizzaPart, partOptions) => {
  return pizzaPart.map((item) => composeItemWithType(item, partOptions));
};
