import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  initialState,
  name: 'books',
  reducers: {
    addBook: (state, action) => {
      return (state = [...state, action.payload]);
    },

    deleteBook: (state, action) => {
      return (state = state.filter((book) => book.id !== action.payload));
    },

    toggleFavorite: (state, action) => {
      return (state = state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      ));
    },
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
