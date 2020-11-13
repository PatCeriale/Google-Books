const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/").get(booksController.findAll).post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

{
  /* <div className="media">
  <img
    className="align-self-start mr-3"
    src={image}
    //   picture.large
    alt={title}
  />
</div>; */
}
