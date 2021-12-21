import * as constants from './constants';

const initialState = {
  count: 0,
  value: 0,
  input: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.INC: {
      let newState = { ...state };
      newState.count += newState.value;
      return newState;
    }

    case constants.DEC: {
      let newState = { ...state };
      if (newState.count - newState.value >= 0) {
        newState.count -= newState.value;
      } else window.alert('Enter correct value');
      return newState;
    }

    case constants.INPUT_VAL: {
      let newState = { ...state };
      newState.value = action.payload;
      return newState;
    }

    case constants.CLR_TXT: {
      let newState = { ...state };
      newState.count = '';
      newState.value = '';
      return newState;
    }

    case constants.CLEAR_INPUT: {
      let newState = { ...state };
      newState.input = null;
      return newState;
    }

    default:
      return state;
  }
};

export default mainReducer;
