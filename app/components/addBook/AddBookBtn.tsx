import * as React from "react";
import Button from "@mui/material/Button";

interface AddBookButtonProps {
    onClick: () => void;
  }
  
  const AddBookButton: React.FC<AddBookButtonProps> = ({ onClick }) => {
    return (
      <Button variant="contained" onClick={onClick}>
        Add Book
      </Button>
    );
  };
  
  export default AddBookButton;