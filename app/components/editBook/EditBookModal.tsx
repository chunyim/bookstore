import * as React from "react";
import BookModal from "../modal/BookModal";
import { BookType } from "@/lib/types/bookType";
import EditBookForm from "./EditBookForm";

interface EditBookModalProps {
  open: boolean;
  onClose: () => void;
  book: BookType;
}

const EditBookModal: React.FC<EditBookModalProps> = ({ open, onClose, book }) => {
  const handleSubmit = (updatedData: BookType) => {
    onClose(); 
  };

  return (
    <BookModal open={open} onClose={onClose} title="Edit Book">
      <EditBookForm book={book} onSubmit={handleSubmit} />
    </BookModal>
  );
};

export default EditBookModal;
