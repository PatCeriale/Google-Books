import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import BookCard from "../../components/BookCard";
import "../style.css";

function SavedPage() {
  const [savedBooks, setSearchResults] = useState([]);
  useEffect(() => {
    API.getBooks().then((res) => setSearchResults(res.data));
  }, []);
  return (
    <>
      <div className="header">
        <h1>Saved</h1>
      </div>
      {savedBooks.map((book) => (
        <BookCard
          {...book}
          saved
          onDelete={(id) =>
            setSearchResults(savedBooks.filter((book) => book.id !== id))
          }
        />
      ))}
    </>
  );
}
export default SavedPage;
