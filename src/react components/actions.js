import * as constants from './constants';

export const incrementCounter = (val) => ({
  type: constants.INC,
  payload: val,
});

export const decrementCounter = (val) => ({
  type: constants.DEC,
  payload: val,
});

export const setValue = (val) => ({
  type: constants.INPUT_VAL,
  payload: val,
});

export const clearText = (val) => ({
  type: constants.CLR_TXT,
  payload: val,
});

export const clearInput = (setInput) => ({
  type: constants.CLEAR_INPUT,
});
