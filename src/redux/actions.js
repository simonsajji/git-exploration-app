// actions.js

// Action Types
export const LOGIN = 'LOGIN';
export const SEARCH_USER = 'SEARCH_USER';

// Action Creators
export const loginAction = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const searchAction = (query) => {
  return {
    type: SEARCH_USER,
    payload: query
  };
};

// Reducer
const initialState = {
  user: null,
  isLoggedIn: false,
  searchQuery: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      };
    case SEARCH_USER:
      return {
        ...state,
        searchQuery: action.payload
      };
    default:
      return state;
  }
};

export default reducer;