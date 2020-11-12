import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import BookCard from "../../components/BookCard";
import "../style.css";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (!searchTerm) return;
    const handle = setTimeout(async () => {
      const res = await API.searchForBooks(searchTerm);
      console.log(res);
      setSearchResults(
        // console.log(searchResults(res.data.items)),
        res.data.items.map(
          ({
            id: bookId,
            volumeInfo: {
              title,
              authors,
              description,
              imageLinks,
              infoLink: link,
            },
          }) => ({
            bookId,
            title,
            authors,
            description,
            image: imageLinks?.thumbnail,
            link,
          })
        )
      );
    }, 500);
    return () => clearTimeout(handle);
  }, [searchTerm]);
  return (
    <>
      <div className="header">
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Search for book"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p>{searchTerm}</p>
      </div>
      {searchResults.map(({ id, bookId, ...rest }) => (
        <BookCard
          {...rest}
          id={id || bookId}
          saved={!!id}
          onSave={
            !id
              ? (bookId, id) =>
                  setSearchResults(
                    searchResults.map((book) =>
                      book.bookId === bookId ? { ...book, id } : book
                    )
                  )
              : undefined
          }
          onDelete={
            id
              ? (id) =>
                  setSearchResults(
                    searchResults.map((book) => {
                      if (book.id === id) delete book.id;
                      return book;
                    })
                  )
              : undefined
          }
        />
      ))}
    </>
  );
}
export default SearchPage;
