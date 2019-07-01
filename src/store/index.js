import { combineReducers, createStore } from 'redux';
import drinkReducer from './reducer';

const combinedReducers = combineReducers({
  drinkReducer,
});

export default createStore(combinedReducers);
