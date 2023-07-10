import { createStore, combineReducers } from 'redux';
// Assuming you want to use Redux Thunk for async actions

// Import your reducers
import userReducer from './reducers/userReducer';
import searchReducer from './reducers/searchReducer';

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;