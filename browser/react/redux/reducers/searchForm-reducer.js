import {UPDATE_SEARCH_INPUT, RECEIVE_PAGES} from '../constants'

 const initalSignState = {
  searchValue: '',
  pages: [],
};

export default (state=initalSignState, action) => {
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case UPDATE_SEARCH_INPUT:
      nextState.searchValue = action.inputValue
      return nextState;
      break;
    case RECEIVE_PAGES:
      nextState.pages = action.pages;
      return nextState;
      break;
    default:
      return state

  }
  return nextState;
}
