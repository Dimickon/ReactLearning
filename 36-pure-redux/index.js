import store from './redux/store.js';

const unsubscribe = store.subscribe(() => {
  console.log(`Redux store just changed! ${store.getState()}`);
});

store.dispatch({ type: 'ADD_CURRENT_TIME', payload: '11:30:00' });

store.dispatch({ type: 'ADD_CURRENT_TIME', payload: '11:32:00' });

unsubscribe();

store.dispatch({ type: 'CLEAR_ALL_TIMES' });
