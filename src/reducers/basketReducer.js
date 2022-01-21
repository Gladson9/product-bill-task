const initialState = [];

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const inBasket = state.find(
        (product) => product.name === action.payload.name
      );
      if (inBasket) {
        let newState = [...state];
        newState.forEach((product) => {
          if (product.name === action.payload.name) {
            product.count++;
            product.totalCost += product.price;
          }
        });
        return newState;
      } else {
        return [
          ...state,
          {
            ...action.payload,
            count: 1,
            savings: 0,
            totalCost: action.payload.price,
          },
        ];
      }
    case "INCREASE_COUNT":
      return state.map((product) => {
        if (product.name === action.payload.name) {
          return {
            ...product,
            count: ++product.count,
            totalCost: product.totalCost + product.price,
          };
        }
        return product;
      });
    case "DECREASE_COUNT":
      let isCountZero = false;

      let newState = state.map((product) => {
        if (product.name === action.payload.name) {
          if (product.count === 1) {
            isCountZero = true;
          }
          return {
            ...product,
            count: --product.count,
            totalCost: product.totalCost - product.price,
          };
        }
        return product;
      });
      if (isCountZero) {
        return newState.filter((product) => product.count !== 0);
      }
      return newState;

    case "APPLY_OFFERS":
      let updatedState = [...state];

      updatedState.forEach((product) => {
        if (product.name === "Cheese") {
          // When you buy a cheese, you get a second cheese free
          if (product.count >= 2) {
            product.savings = (product.price / 2) * product.count;
          } else {
            product.savings = 0;
          }
        } else if (product.name === "Butter") {
          // Get a third off Butter!
          product.savings = product.totalCost / 3;
        }
      });
      // When you buy a soup, you get a half price Bread
      let idx = updatedState.findIndex((product) => product.name === "Bread");
      let idxSoup = updatedState.findIndex(
        (product) => product.name === "Soup"
      );
      let breadItem = updatedState.find((product) => product.name === "Bread");
      let itemSoup = updatedState.find((product) => product.name === "Soup");

      if (idx >= 0 && idxSoup >= 0) {
        let savingsCost = (breadItem.price / 2) * itemSoup.count;
        if (savingsCost <= breadItem.totalCost) {
          updatedState[idx] = {
            ...breadItem,
            savings: savingsCost,
          };
        }
      } else if (idx >= 0) {
        updatedState[idx] = {
          ...breadItem,
          savings: 0,
        };
      }
      return updatedState;

    default:
      return state;
  }
};

export default basketReducer;
