import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { BookType } from "@/lib/types/bookType";
import { useAppDispatch } from "@/lib/hooks";
import { editBook } from "@/lib/features/bookList/bookListSlice";

interface EditBookFormProps {
  book: BookType;
  onSubmit: (data: BookType) => void; 
}

const EditBookForm: React.FC<EditBookFormProps> = ({ book, onSubmit }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = React.useState<BookType>(book);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editBook(formData));
    onSubmit(formData); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Price"
        variant="outlined"
        fullWidth
        margin="normal"
        name="price"
        value={formData.price}
        onChange={handleChange}
        type="number"
        inputProps={{ step: "1" }}
        required
      />
      <TextField
        label="Category"
        variant="outlined"
        fullWidth
        margin="normal"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        name="description"
        value={formData.description}
        onChange={handleChange}
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Update
      </Button>
    </form>
  );
};

export default EditBookForm;
