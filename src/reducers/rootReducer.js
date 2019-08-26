import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../actions/cartActions";

import { combineReducers } from "redux";

function cartReducer(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.item]
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(action.index + 1)
        ]
      };
    }

    case UPDATE_ITEM: {
      // TODO: Implement update item here.
      return state;
    }

    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  cartReducer
});

export default rootReducer;
