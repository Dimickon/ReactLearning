const initialState = [];

function reducer(state, action) {
  if (action.type === 'ADD_NAME') {
    return [...state, action.payload];
  }
  return state;
}
