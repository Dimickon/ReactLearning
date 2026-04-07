const initialState = [];

function reducer(state, action) {
  if (action.type === 'ADD_NAME') {
    return [...state, action.payload];
  }

  if (action.type === 'DELETE_NAME') {
    return state.filter((personName) => personName !== action.payload);
  }

  if (action.type === 'CLEAR_NAMES') {
    return [];
  }
  return state;
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Dima' });
console.log(newState);

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Ksenia' });
console.log(newState);

newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Dima' });
console.log(newState);

newState = reducer(newState, { type: 'CLEAR_NAMES' });
console.log(newState);

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Dima' });
console.log(newState);
