import React from "react";
import API from "../utils/API";

function BookCard({
  title,
  authors,
  description,
  image,
  link,
  saved = false,
  id,
  onSave,
  onDelete,
  ...rest
}) {
  const handleBookSave = async () => {
    if (saved) {
      await API.deleteBook(id);
      onDelete(id);
    } else {
      const res = await API.saveBook({
        title,
        authors,
        description,
        image,
        link,
      });
      onSave(id, res.id);
    }
  };
  return (
    <div className="card" {...rest}>
      <h1>{title}</h1>
      <p>
        {" "}
        {authors}
        <br />
        <img src={image} />
        <br />
        {description}
        <br />
        <a href={link}>{link}</a>
      </p>
      <button onClick={handleBookSave}>{saved ? "Delete" : "Save"}</button>
    </div>
  );
}
export default BookCard;
