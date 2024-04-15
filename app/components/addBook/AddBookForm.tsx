import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from 'uuid';
import { BookType } from "@/lib/types/bookType";
import { addBook } from "@/lib/features/bookList/bookListSlice";
import { useAppDispatch } from "@/lib/hooks";

interface AddBookFormProps {
  onSubmit: (data: BookType) => void; 
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onSubmit }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = React.useState<BookType>({
    id: "",
    name: "",
    price: 0,
    category: "", 
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook: BookType = { ...formData, id: uuidv4() }; 
    dispatch(addBook(newBook));
    onSubmit(newBook); 
    setFormData({
      id: "",
      name: "",
      price: 0,
      category: "",
      description: "",
    });
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
        Add
      </Button>
    </form>
  );
};

export default AddBookForm;
