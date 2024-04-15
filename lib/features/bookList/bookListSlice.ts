import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { BookType } from "../../types/bookType";

export interface BookListState {
  books: BookType[];
}

const initialState: BookListState = {
  books: [    {
    id: "1",
    name: "A Theory of Justice",
    price: 15.99,
    category: "Philosophy",
    description: "A work of political philosophy by John Rawls...",
  },
  {
    id: "2",
    name: "Anarchy, State, and Utopia",
    price: 14.99,
    category: "Philosophy",
    description: "A book by the American political philosopher Robert Nozick...",
  },],
};

export const bookListSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: (create) => ({
    addBook: create.reducer((state, action: PayloadAction<BookType>) => {
      state.books.push(action.payload);
    }),
    removeBook: create.reducer((state, action: PayloadAction<String>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    }),
    editBook: create.reducer((state, action: PayloadAction<BookType>) => {
      const updatedBook = action.payload;
      const index = state.books.findIndex((book) => book.id === updatedBook.id);
      if (index !== -1) {
        state.books[index] = updatedBook;
      }
    }),
  }),
});

export const { addBook, removeBook, editBook } = bookListSlice.actions;
export const selectBooks = (state: RootState) => state.bookList.books;

export default bookListSlice.reducer;

