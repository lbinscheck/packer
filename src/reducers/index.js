/* eslint-disable no-restricted-globals */
import {
  SMALLINCREMENT,
  MEDIUMINCREMENT,
  LARGEINCREMENT,
  BOXINCREMENT,
  SMALLDECREMENT,
  MEDIUMDECREMENT,
  LARGEDECREMENT,
  BOXDECREMENT,
  BOXESCOUNT,
  SMALLCHANGE,
  MEDIUMCHANGE,
  LARGECHANGE,
  BOXCHANGE,
} from '../constants';

/**
 * [initialState]
 * @type {Object}
 */
const initialState = {
  smallcount: Number(0),
  mediumcount: Number(0),
  largecount: Number(0),
  boxlength: Number(30),
  boxescount: Number(1),
};

/**
 * [Reducer function.
 * Takes the state and an action.
 * Which will be received whenever a dispatch function is called.
 * This reducer handles the state, that means changes it and returns the new
 * state or it returns the unchanged state.
 * Pure functions are mandatory.]
 * @param  {[Object]} [state=initialState]
 * @param  {[Object]} action
 * @return {[Object]}
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SMALLINCREMENT:
      return Object.assign({}, state, {
        smallcount: state.smallcount + 1,
      });
    case MEDIUMINCREMENT:
      return Object.assign({}, state, {
        mediumcount: state.mediumcount + 1,
      });
    case LARGEINCREMENT:
      return Object.assign({}, state, {
        largecount: state.largecount + 1,
      });
    case BOXINCREMENT:
      if (state.boxlength >= 100) {
        return Object.assign({}, state, { boxlength: Number(100) });
      }
      return Object.assign({}, state, {
        boxlength: state.boxlength + 1,
      });
    case SMALLDECREMENT:
      if (state.smallcount === 0) {
        return state;
      }
      return Object.assign({}, state, {
        smallcount: state.smallcount - 1,
      });
    case MEDIUMDECREMENT:
      if (state.mediumcount === 0) {
        return state;
      }
      return Object.assign({}, state, {
        mediumcount: state.mediumcount - 1,
      });
    case LARGEDECREMENT:
      if (state.largecount === 0) {
        return state;
      }
      return Object.assign({}, state, {
        largecount: state.largecount - 1,
      });
    case BOXDECREMENT:
      if (state.boxlength <= 30) {
        return state;
      }
      return Object.assign({}, state, {
        boxlength: state.boxlength - 1,
      });
    case BOXESCOUNT:
      return Object.assign({}, state, {
        boxescount: Number(action.value),
      });
    case SMALLCHANGE:
      if (isNaN(action.value) || action.value < 0) {
        return state;
      }
      return Object.assign({}, state, {
        smallcount: Number(action.value),
      });
    case MEDIUMCHANGE:
      if (isNaN(action.value) || action.value < 0) {
        return state;
      }
      return Object.assign({}, state, {
        mediumcount: Number(action.value),
      });
    case LARGECHANGE:
      if (isNaN(action.value) || action.value < 0) {
        return state;
      }
      return Object.assign({}, state, {
        largecount: Number(action.value),
      });
    case BOXCHANGE:
      if (isNaN(action.value) || action.value < 0 || action.value > 100) {
        return state;
      }
      return Object.assign({}, state, {
        boxlength: Number(action.value),
      });
    default:
      return state;
  }
};

export default reducer;
