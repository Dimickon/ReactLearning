import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload };
    },
  },
});

/* Автоматическая деструкторизация setTitleFilter вместо const setTitleFilter = filterSlice.actions.setTitleFilter */
export const { setTitleFilter } = filterSlice.actions;
export default filterSlice.reducer;
