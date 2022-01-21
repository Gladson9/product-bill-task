import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  basket: basketReducer,
  products: productsReducer,
});

export default rootReducer;
