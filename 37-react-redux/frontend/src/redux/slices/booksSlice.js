import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';

const initialState = [];

const booksSlice = createSlice({
  initialState,
  name: 'books',
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },

    deleteBook: (state, action) => {
      return (state = state.filter((book) => book.id !== action.payload));

      // Решение Богдана с мутированием оригинального массива
      // const index = state.findIndex((book) => book.id === action.payload)
      // if (index !== -1) {
      //   state.splice(index, 1)
      // }
    },

    toggleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });

      // Изначальное решение без мутации оригинального массива
      // return (state = state.map((book) =>
      //   book.id === action.payload
      //     ? { ...book, isFavorite: !book.isFavorite }
      //     : book
      // ));
    },
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:4000/random-book');
    // Чтобы не проверять res.data &&  можно сократить до res?.data?.title && res?.data?.author
    if (res?.data?.title && res?.data?.author) {
      dispatch(addBook(createBookWithID(res.data, 'API')));
    }
  } catch (error) {
    console.log('error', error);
  }
};
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
