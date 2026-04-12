import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';
import { setError } from './errorSlice';

const initialState = [];

// Интеграция ассинхронной функции в slice с помощью createAsyncThunk. У функции fetchBook по итогам появляются свойства fulfilled, rejected и другие, по которым мы уже выполняем действия в ExtraReducers
export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      // заново генерируем ошибку, чтобы не попасть в extraReducers fetchBook.fulfilled
      throw error;
    }
  }
);

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
  // Выполнение результата ассинхрого запроса из fetchBook
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithID(action.payload, 'API'));
      }
    });
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
