import { burgerActions } from "../slices/burger-slice";
import { counterActions } from "../slices/counter-slice";
import { dataActions } from "../slices/data-slice";
import { ingredientsActions } from "../slices/ingredient-slice";
import { orderActions } from "../slices/order-slice";

const rootActions = {
  burger: burgerActions,
  counter: counterActions,
  data: dataActions,
  ingredients: ingredientsActions,
  order: orderActions,
};

export default rootActions;