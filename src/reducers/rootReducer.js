import { combineReducers } from 'redux'

function helloWorldReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  helloWorldReducer
});

export default rootReducer;