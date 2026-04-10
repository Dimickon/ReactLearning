import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
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
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

/* Автоматическая деструкторизация setTitleFilter вместо const setTitleFilter = filterSlice.actions.setTitleFilter */
export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

/* Если фильтров будет много, то можно всё запихнуть в один экспорт. Но тогда при измении одной части объекта, будут ререндериться все компоненты, в которых используется общий экспорт */
//export const selectFilters = (state) => state.filters;

export default filterSlice.reducer;
