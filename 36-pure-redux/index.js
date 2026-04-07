import store from './redux/store.js';

console.log(store.getState());

store.dispatch({ type: 'ADD_CURRENT_TIME', payload: '11:30:00' });
console.log(store.getState());

store.dispatch({ type: 'ADD_CURRENT_TIME', payload: '11:32:00' });
console.log(store.getState());

store.dispatch({ type: 'CLEAR_ALL_TIMES' });
console.log(store.getState());
