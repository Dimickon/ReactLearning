const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CURRENT_TIME':
      return [...state, action.payload];

    case 'CLEAR_ALL_TIMES':
      return [];

    default:
      state;
  }
}

export default reducer;
