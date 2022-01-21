export const addToBasket = (product) => ({
  type: "ADD_TO_BASKET",
  payload: product,
});

export const increaseProductCount = (product) => ({
  type: "INCREASE_COUNT",
  payload: product,
});
export const decreaseProductCount = (product) => ({
  type: "DECREASE_COUNT",
  payload: product,
});

export const checkSpecialOffers = () => ({
  type: "APPLY_OFFERS",
});
