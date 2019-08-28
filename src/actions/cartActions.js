export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

export function addItemToCart(item) {
  return {
    type: ADD_ITEM,
    item
  };
}

export function removeItemFromCartByIndex(index) {
  return {
    type: REMOVE_ITEM,
    index
  };
}
