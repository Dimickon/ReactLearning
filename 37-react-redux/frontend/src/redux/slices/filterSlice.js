import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
};

const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    setTitleFilter: (state, action) => {
      /* Можно мутировать состояние за счёт библиотеки Immer, которую использует ReduxSlice. Эта библиотека формирует новый объект автоматически */
      state.title = action.payload;

      /* Либо формируем новый объект вручную (традиционный подход) */
      //return {...state, title: action.payload}
    },

    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

/* Автоматическая деструкторизация setTitleFilter вместо const setTitleFilter = filterSlice.actions.setTitleFilter */
export const { setTitleFilter, setAuthorFilter, resetFilters } =
  filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export default filterSlice.reducer;
