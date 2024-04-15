"use client";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { removeBook } from "@/lib/features/bookList/bookListSlice";
import { BookType } from "@/lib/types/bookType";
import EditBookModal from "../editBook/EditBookModal";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.bookList.books);
  const [editModalOpen, setEditModalOpen] = React.useState<boolean>(false);
  const [selectedBook, setSelectedBook] = React.useState<BookType | null>(null);

  const handleDelete = (id: string) => {
    dispatch(removeBook(id));
  };

  const handleEdit = (book: BookType) => {
    setSelectedBook(book);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      {selectedBook && (
        <EditBookModal
          open={editModalOpen}
          onClose={handleCloseEditModal}
          book={selectedBook}
        />
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEdit(book)}
                >
                  {book.name}
                </TableCell>
                <TableCell>{book.price}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BookList;
