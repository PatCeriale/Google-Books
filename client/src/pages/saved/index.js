import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import BookCard from "../../components/BookCard";
import "../style.css";

function SavedPage() {
  const [savedBooks, setSavedBooks] = useState([]);
  useEffect(() => {
    API.getBooks().then((res) =>
      setSavedBooks(res.data.map(({ _id, ...rest }) => ({ id: _id, ...rest })))
    );
  }, []);
  return (
    <>
      <div className="header">
        <h1>Saved</h1>
      </div>
      {savedBooks.map((book, i) => (
        <BookCard
          key={i}
          {...book}
          saved
          onDelete={(id) =>
            setSavedBooks(savedBooks.filter((book) => book.id !== id))
          }
        />
      ))}
    </>
  );
}
export default SavedPage;
