// searchReducer.js

// Define the initial state
const initialState = {
    searchQuery: ''
  };
  
  // Define the searchReducer
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_QUERY':
        return {
          ...state,
          searchQuery: action.payload
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  