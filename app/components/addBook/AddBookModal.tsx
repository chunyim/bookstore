import * as React from "react";
import AddBookForm from "./AddBookForm";
import BookModal from "../modal/BookModal";

interface AddBookModalProps {
  open: boolean;
  onClose: () => void;
}

const AddBookModal: React.FC<AddBookModalProps> = ({ open, onClose }) => {
  const handleSubmit = () => {
    onClose(); 
  };

  return (
    <BookModal open={open} onClose={onClose} title="Add Book">
      <AddBookForm onSubmit={handleSubmit} />
    </BookModal>
  );
};

export default AddBookModal;

