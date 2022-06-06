import { addItemToCart, removeFilter } from './utils';
import constants from './constants';

const INITIAL_STATE = {
  cartItems: [],
  filters: {categories:[], price:[]},
  dropDopwnToggled: false,
  sort:{price:1}
};

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case constants.ADD_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case constants.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case constants.SET_CATEGORY_FILTER:
      return {
        ...state,
        filters: { price: state.filters.price, categories: action.payload },
      };
    case constants.SET_PRICE_FILTER:
      return {
        ...state,
        filters: { price:  action.payload, categories: state.filters.categories},
      };
    case constants.REMOVE_FILTER:
      return {
        ...state,
        filters: removeFilter(state.filters, action.payload),
      };
    case constants.DROPDOWN_TOGGLED:
      return {
        ...state,
        dropDopwnToggled: !state.dropDopwnToggled,
      };
    case constants.SORT:
      return {
        ...state,
        sort: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
