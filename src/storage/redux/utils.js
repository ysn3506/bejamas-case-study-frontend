export const removeFilter = (filters, filterToRemove) => {
    return filters.filter((filter) => filter !== filterToRemove);

};


export const addItemToCart = (cartItems, cartItemToAdd) => {
  return [...cartItems, cartItemToAdd];
};


