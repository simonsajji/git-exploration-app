// userReducer.js

// Define the initial state
const initialState = {
    user: null,
    isLoggedIn: false
  };
  
  // Define the userReducer
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isLoggedIn: false
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  