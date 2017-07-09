import { FETCH_WEATHER } from '../actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
  case FETCH_WEATHER:
    return [ action.payload.data, ...state ];
  default:
    return state;
  }
};
