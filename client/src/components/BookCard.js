import React from "react";
import API from "../utils/API";
import "./style.css";

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
      <div className="media">
        <img className="align-self-start mr-3" src={image} alt={title} />
        <div className="media-body">
          <h5 className="mt-0">
            <strong>{title}</strong>
          </h5>
          <p>
            <strong>Author: </strong>
            {authors}
            <br></br>
            <strong>Description: </strong>
            {description}
            <br></br>
            <strong>Link: </strong>
            <a href={link}>{link}</a>
          </p>
          <button className="bookCardBtn" onClick={handleBookSave}>
            {saved ? "Delete from" : "Save to"} Directory
          </button>
        </div>
        <br />
      </div>
      {/* <h1>{title}</h1>
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

      <div class="card" style={{ width: "25rem" }}>
        <img class="card-img-top" src={image} alt={title} />
        <div class="card-body">
          <p class="card-text">
            {description}
            <br />
            Link:
            <a href={link}>{link}</a>
          </p>
          <button onClick={handleBookSave}>{saved ? "Delete" : "Save"}</button>
        </div>
      </div> */}
    </div>
  );
}
export default BookCard;
