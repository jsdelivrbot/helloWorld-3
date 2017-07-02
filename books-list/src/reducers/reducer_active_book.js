import { BOOK_SELECTED } from '../actions';

// state is only slice of state this reducer is responsible for
export default (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
  case BOOK_SELECTED:
    return action.book;
  default:
    return state;
  }
};
