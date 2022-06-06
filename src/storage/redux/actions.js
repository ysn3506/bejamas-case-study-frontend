
import CONSTANTS from "./constants";

export const addItem = (item) => ({
  type: CONSTANTS.ADD_CART,
  payload: item
});


export const setSort = (item) => ({
   type: CONSTANTS.SORT,
  payload: item
})

export const clearCart = () => ({
  type: CONSTANTS.CLEAR_CART,
  payload: {},
});


export const setCategoryFilter = (item) => ({
  type: CONSTANTS.SET_CATEGORY_FILTER,
  payload: item
});

export const setPriceFilter = (item) => ({
  type: CONSTANTS.SET_PRICE_FILTER,
  payload: item,
});

export const removeFilter = (item) => ({
  type: CONSTANTS.REMOVE_FILTER,
})

export const cartDropDownToggled = () => ({
  type: CONSTANTS.DROPDOWN_TOGGLED,
})
