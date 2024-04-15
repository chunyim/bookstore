"use client";

import * as React from "react";
import AddBookButton from "./AddBookBtn";
import AddBookModal from "./AddBookModal";

export default function AddBook() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddBookButton onClick={handleOpen} />
      <AddBookModal open={open} onClose={handleClose} />
    </div>
  );
}
