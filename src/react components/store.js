import { createStore, combineReducers } from 'redux';
import appReducer from './reducer';
import mainReducer from './mainReducer';

const reducers = combineReducers(appReducer, mainReducer);
const reduxStore = createStore(reducers);

export default reduxStore;
