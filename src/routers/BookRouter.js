const express = require("express");
const {
  getAllBooks,
  getBookById,
  getBookByQuery,
  createBook,
  updateBookById,
  deleteBookById,
} = require("../controllers/BookController");
const bookRouter = express.Router();

bookRouter.get("/books", getAllBooks);
bookRouter.get("/books/:id", getBookById);
bookRouter.get("/books/search", getBookByQuery);
bookRouter.post("/books", createBook);
bookRouter.put("/books/u/:id", updateBookById);
bookRouter.delete("/books/d/:id", deleteBookById);

module.exports = bookRouter;
